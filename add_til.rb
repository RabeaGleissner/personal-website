def create(header)
  date = Time.now.to_s.split(" ").first
  kebab_header = header.downcase.gsub(" ", "-")
  new_post = File.open("src/markdown/today-i-learnt/#{date}-#{kebab_header}.md", "w")
  new_post.puts("
---
date: \"#{date}\"
title: \"#{header}\"
path: \"\/til\/#{kebab_header}\"
tags:[\"til\"]
---
")

end

puts "Please enter a title"
header = gets.chomp
create(header)
