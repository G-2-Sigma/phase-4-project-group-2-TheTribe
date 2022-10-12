# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "creating reviews"
    10.times do
        Review.create(
            title: Faker::Name.name,
            comment:Faker::Quote.matz,
         user_id: User.all[rand(User.count)].id,
    post_id: Post.all[rand(Post.count)].id
        )
    end
    puts "Hey yaaa our reviews done"
