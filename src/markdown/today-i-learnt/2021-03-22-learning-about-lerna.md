---
date: "2021-03-22"
title: "Learning about Lerna"
path: "/til/learning-about-lerna"
tags: ["til"]
---

Lerna is a tool for managing mono-repos, i.e. Git repos that contain several projects.
I'd worked on a repo before that used it but never understood its full capabilities.
Now I learnt more!

## What it's for

### Versioning

If you're actively developing in your mono-repo, you probably want to manage the projects' versions.
Of course, you could just manually update the version in the package.json as you see fit for each project.
But if you wanted to automate this, you could run it with Lerna as part of the build pipeline, for example.

Lerna can be installed to version all projects at the same time, which is called "fixed mode".
This is the default installation of Lerna.
This means, when changes are made to any of the projects in your mono-repo and you run `lerna version`, then the version in every one of the projects' package.json files is increased.

I'm not sure what the usecase for this is - I would assume that you would want to keep your projects decoupled from each other as much as possible.

Anyway, it is also possible to version the projects individually with Lerna.
You'd have to initialise Lerna with a flag like so:

`lerna init --independent`

In that case Lerna will only increase the version of the project that has changes.

#### Semantic versioning

Lerna also supports semantic versioning.
If you want to bump a version automatically, based on semantic commit messages, you can run Lerna with `lerna version --conventional-commits`.
For example, if you prefix your commit with "fix: " then Lerna knows that the patch version should be increased.
Prefixing your commit with "feat: " tells Lerna to increase the major version number, because a new features was added.

Pretty handy if you run Lerna as part of the build pipeline and don't want to think about version numbers.
A great side effect is that it keeps your commits consistent.

### Hoisting dependencies

Besides versioning, Lerna also helps with dependency management.
Let's say you have three projects inside your mono-repo and they all use React.
Instead of installing React three times into each projects' node modules, Lerna installs it once at the top level `node_modules` directory.
It then symlinks that installation in all the individual project's node modules.
Having spent hours and hours (days??) of my life upgrading dependencies, I can definitely see the benefit of this approach.

This feature comes with a warning in the Lerna documentation. Why?
Because it is possible to use a dependency in a project that hasn't specified that dependency in its package.json.

Let's say I've got React hoisted already because I'm using it for other projects inside my mono-repo.
If I now add a new project called `my-new-project` I can just import React in it and it will work.

However, if I end up importing `my-new-project` into a different codebase and don't have React installed, the whole shebank will break.
At least the shebang build with React.
Because I haven't specified React as a dependency in `my-new-project`.

So... that's not ideal.

### Symlinking projects that are dependencies of each other

The last Lerna feature that I learnt about is the symlinking of internal dependencies.
It is sort of related to the hoisting feature but I thought I'd list it separately.

In a case where some of the projects in your mono-repo import other projects from the same mono-repo as dependencies, you can use the `lerna bootstrap` command.
This will symlink the dependencies in the node modules so that you don't need to actually pull in the files of the other packages.
