# puts "Creating Users"
# 10.times do
#     User.create(
#         username: Faker::Name.name,
#         email: Faker::Internet.email,
#         bio: Faker::Lorem.paragraph,
#         password: Faker::Internet.password(min_length: 8),
#         profile_picture: Faker::LoremFlickr.image,
#         user_type: 0
#     )
# end
# puts 'All done Sinyor!'

# puts 'Now 🌱  seeding posts...'

# response = RestClient.get(
#     "https://newsapi.org/v2/everything?q=apple&from=2022-10-11&to=2022-10-11&sortBy=popularity&apiKey=a51faed345d34d54961b4577c8755a5f")
# articles = JSON.parse(response)  

# categories = ['Travel','Entertaiment','Technology','Fashion','Lifestyle']

# users = User.all.select{|user|user.user_type =='author'}

# articles.each do |post|
#     new_post = Post.create(
#         title: post['title'],
#         content: post['content'],
#         category: categories.shuffle.first,
#         user_id: users[rand(0...users.size)].id
#     )
# end
# puts "✅ Done seeding!"
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
end
