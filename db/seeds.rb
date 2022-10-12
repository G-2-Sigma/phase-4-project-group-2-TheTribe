# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "The seeds of posts beginning"
  10.times do

    Post.create(
        title:Faker::Lorem.sentence(word_count: 3),
        category:Faker::Lorem.sentence(word_count: 3),
        content:Faker::Lorem.paragraph(sentence_count: 10)

    )

  end
puts "The seed of posts end"