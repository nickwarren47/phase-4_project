puts "Seeding..."

user1 = User.create(name: "Charlie Brown", username: "Snoopy", email: Faker::Internet.free_email, password: "12345678", age: 20, location: Faker::Nation.capital_city)
user2 = User.create(name: "Sherlock Holmes", username: "221B", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city)
user3 = User.create(name: "John Mycroft", username: "TheDoctor", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city)
user4 = User.create(name: "Arya Stark", username: "Has_No_Name", email: Faker::Internet.free_email, password: "ABC12345678!", age: 20, location: Faker::Nation.capital_city)
user5 = User.create(name: "Jon Snow", username: "Ice_and_Fire", email: Faker::Internet.free_email, password: "ABC12345678!", age: 25, location: Faker::Nation.capital_city)

def user_template
   username = Faker::Internet.username
   name = Faker::Name.unique.name
   email= Faker::Internet.free_email
   password = Faker::Internet.password(min_length: 8)
   age = Faker::Number.between(from: 15, to: 99)
   location = Faker::Nation.capital_city
   {username: username, name: name, email: email, password: password, age: age, location: location}
end

def review_template
   rating = Faker::Number.between(from: 1, to: 10)
   review = Faker::Hipster.paragraph(sentence_count: 1)
   image_url = Faker::LoremPixel.image(size: "50x60")
   pro_tip = Faker::Hipster.sentence(word_count: 2)
   length_of_stay = Faker::Number.between(from: 1, to: 99)
   city = Faker::Address.city
   destination_id = Faker::Number.between(from: 1, to: 25)
   user_id = Faker::Number.between(from: 1, to: 25)
   {rating: rating, image_url: image_url, destination_id: destination_id, user_id: user_id, length_of_stay: length_of_stay, city: city, pro_tip: pro_tip, review: review}
end

def destination_template
   country = Faker::Address.country_code
   c = ISO3166::Country.find_country_by_alpha2(country)
   {country_or_territory: c.name, continent: c.region}
end

25.times do
   User.create(user_template)
end

25.times do
   Destination.create(destination_template)
end

25.times do
   Review.create(review_template)
end

puts "Finished seeding!"