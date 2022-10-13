puts "Creating Users"
10.times do
    User.create(
        username: Faker::Name.name,
        email: Faker::Internet.email,
        bio: Faker::Lorem.paragraph,
        password: Faker::Internet.password(min_length: 8),
        profile_picture: Faker::LoremFlickr.image,
        user_type: 0
    )
end
puts 'All done Sinyor!'

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
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


puts "creating reviews"
    10.times do
        Review.create(
            title: Faker::Name.name,
            comment:Faker::Quote.matz,
         user_id: User.all[rand(User.count)].id,
    post_id: Post.all[rand(Post.count)].id,
    rating: rand(1..5)
        )
    end
    puts "Hey yaaa our reviews done"

