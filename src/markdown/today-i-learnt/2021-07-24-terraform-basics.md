---
date: "2021-07-24"
title: "Terraform basics"
path: "/til/terraform-basics"
tags: ["til"]
---

A few weeks ago I was lucky enough to work on a codebase that was getting setup with Terraform.
I had never used it before, so it was great to learn about it!
Here's what I understand so far...

## What is Terraform?

Terraform is a tool that helps with provisioning servers and infrastructure for deployment.

You tell it which stuff to create and with which configuration. It creates the stuff and you can happily deploy your code.

You need to deploy your .NET application to Azure?
Terraform can create the right kind of server with the right software installed on it.

##  What's special about it?

It's infrastructure as code, innit? Hehe, sorry, I just wanted to use the trendy term. What does that even mean?

It means that rather than you as a human going into the Azure portal, clicking the buttons to create a server instance and entering your passwords and things... Terraform will do it for you! You write some code in a Terraform file using the HCL (Hashicorp Configuration Language). Then you execute that code and boom, all done.

So if you need to spin up another server, you can easily just run the same Terraform code again.
Or if you decide to move from Azure to Digital Ocean, you can... oh wait. No, you can't. You'd have to write a new Terraform file because your current one is all Azure specific.

I've got some experience with Ansible from a long time ago. Terraform is a slightly newer tool. So how is it different?

## Imperative vs declarative approach

Ansible playbooks (the files that run the code to provision your servers) use an imperative approach. You need to specify line by line what you want Ansible to do. Kind of like writing scripts. Terraform is different in the sense that you specify the end result of what you want to achieve. But you don't need to tell it how to get there. The approach is called "declarative".

I'm imagining it a bit like this:

With Ansible you say, please first do an `apt-get update` and then install Node 16 and then install the .NET 5.0 SDK.

And with Terraform you declare that you want an instance that can run Node 16 and .NET 5.0... I don't care how you achieve that, Terraform, just get it done!

## The Terraform process

When you first write your Terraform file you'll probably start by installing Terraform itself (instructions on the website).
Then you initialise a Terraform directory with `terraform init`.
The file `main.tf` is where you write your code. To be honest, I feel like it's more config rather than code but fine... "infrastructure as config"  doesn't have the same ring to it.

You can run all sorts of commands with `terraform something`.
`terraform validate` is a good one.
With it you can check if your `main.tf` has any errors or if it's all good to go.

Before you apply changes, you can `terraform plan`.
Terraform will then compare your most recent code changes to the current state.

Let's say you had declared that you would like a Ruby environment in a cloud in North America.
But you changed that code to say you now  want a .NET environment in Australia.
When you validate the file, Terraform will tell you that it's going to delete the Ruby server and will create a new .NET server for you in a different cloud.

How does it know what the difference is?

It saves the current state of your infrastructure in a file called `terraform.tfstate`.
By default it does that on your local machine.
Chances are that you're working with other developers so you'll probably want to save it somewhere more convenient.
It's common to save it in the same place as your infrastructure (e.g. in Azure).
In your `main.tf` you need to specify that you want to create a Terraform backend and where it should be.

So every time you run a `terraform plan` it's going to look at that state file in the cloud now.

Once you're happy with the proposed changes, you can then run `terraform apply` to put the plan into action.

If you don't like your infrastructure, you can also `terraform destroy` it.

## What does a Terraform file look like? 

From what I know so far, you first configure and declare a provider in your `main.tf`. The provider is specific to the cloud hosting service that you're using (e.g. AWS, Azure). I imagine it like a code package that  knows the resources specific to that cloud hosting service. Once you have the provider, you can declare your desire for using the resources that it knows. Then you specify for each resource how you want it to be set up.

It looks something like this:

```
resource "azurerm_resource_group" "my_cool_resource_group" {
   name     = var.resource_group_name
   location = var.location
   tags = {
     environment = var.environment
   }
 }
 ```

The second string in the first line is like a variable name. If you needed to know the location of the resource group further down in the file, you can refer to it with `azurerm_resource_group.my_cool_resource_group.location`.

The `var.something` refers to variables that you can create separately in a `variables.tf` file. If you put that in the same `/terraform` directory, it should work.

This is how you declare the location variable, for example:

```
variable "location" {
  default     = "europewest"
  type        = string
  description = "The deployment location"
}
```

The default value is what is pulled in when you use `var.location` and the other two lines are for information purposes, I think.

And that's all I've got for now. So far so good!
