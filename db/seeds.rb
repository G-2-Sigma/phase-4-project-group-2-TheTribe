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

# puts 'Now 🌱  seeding posts...'

# response = RestClient.get("
#     https://newsapi.org/v2/everything?q=apple&from=2022-10-11&to=2022-10-11&sortBy=popularity&apiKey=a51faed345d34d54961b4577c8755a5f"
# )
# articles = JSON.parse(response)
puts "The seeds of posts beginning"
  10.times do
