def create(header, custom_date='')
  date = custom_date != '' ? custom_date : Time.now.to_s.split(" ").first
  kebab_header = header.downcase.gsub(" ", "-")
  new_post = File.open("src/markdown/today-i-learnt/#{date}-#{kebab_header}.md", "w")
  new_post.puts("
---
date: \"#{date}\"
title: \"#{header}\"
path: \"\/til\/#{kebab_header}\"
tags: [\"til\"]
---
")
end

puts "Please enter a title"
header = gets.chomp
puts "Date from today? y/n"
today = gets.chomp
if today === 'y'
  create(header)
else
  puts "Enter date! (ex: 2019-07-04)"
  custom_date = gets.chomp
  create(header, custom_date)
end
