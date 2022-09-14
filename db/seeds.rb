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

d1 = Destination.create(country_or_territory: "Aruba", continent: "Island", image_url: "", flag_url: "")
d2 = Destination.create(country_or_territory: "Bahamas", continent: "Island", image_url: "", flag_url: "")
d3 = Destination.create(country_or_territory: "Jamaica", continent: "Island", image_url: "", flag_url: "")
d4 = Destination.create(country_or_territory: "Cuba", continent: "Island", image_url: "", flag_url: "")
d5 = Destination.create(country_or_territory: "Domician Republic", continent: "Island", image_url: "", flag_url: "")
d6 = Destination.create(country_or_territory: "Seychelles", continent: "Island", image_url: "", flag_url: "")
d7 = Destination.create(country_or_territory: "United Kingdom", continent: "Europe", image_url: "", flag_url: "")
d8 = Destination.create(country_or_territory: "Germany", continent: "Europe", image_url: "", flag_url: "")
d9 = Destination.create(country_or_territory: "France", continent: "Europe", image_url: "", flag_url: "")
d10 = Destination.create(country_or_territory: "Spain", continent: "Europe", image_url: "", flag_url: "")
d11 = Destination.create(country_or_territory: "Greece", continent: "Europe", image_url: "", flag_url: "")
d12 = Destination.create(country_or_territory: "Italy", continent: "Europe", image_url: "", flag_url: "")
d13 = Destination.create(country_or_territory: "Switzerland", continent: "Europe", image_url: "", flag_url: "")
d14 = Destination.create(country_or_territory: "Netherlands", continent: "Europe", image_url: "", flag_url: "")
d15 = Destination.create(country_or_territory: "Belgium", continent: "Europe", image_url: "", flag_url: "")
d17 = Destination.create(country_or_territory: "Denmark", continent: "Europe", image_url: "", flag_url: "")
d18 = Destination.create(country_or_territory: "Kenya", continent: "Africa", image_url: "", flag_url: "")
d19 = Destination.create(country_or_territory: "Egypt", continent: "Africa", image_url: "", flag_url: "")
d20 = Destination.create(country_or_territory: "Ethiopia", continent: "Africa", image_url: "", flag_url: "")
d21 = Destination.create(country_or_territory: "South Africa", continent: "Africa", image_url: "", flag_url: "")
d22 = Destination.create(country_or_territory: "Liberia", continent: "Africa", image_url: "", flag_url: "")
d23 = Destination.create(country_or_territory: "Morocco", continent: "Africa", image_url: "", flag_url: "")
d24 = Destination.create(country_or_territory: "Nigeria", continent: "Africa", image_url: "", flag_url: "")
d25 = Destination.create(country_or_territory: "Israel", continent: "Asia", image_url: "", flag_url: "")
d26 = Destination.create(country_or_territory: "Lebananon", continent: "Asia", image_url: "", flag_url: "")
d27 = Destination.create(country_or_territory: "Saudi Arabia", continent: "Asia", image_url: "", flag_url: "")
d28 = Destination.create(country_or_territory: "UAE", continent: "Asia", image_url: "", flag_url: "")
d29 = Destination.create(country_or_territory: "Oman", continent: "Asia", image_url: "", flag_url: "")
d30 = Destination.create(country_or_territory: "India", continent: "Asia", image_url: "", flag_url: "")
d31 = Destination.create(country_or_territory: "China", continent: "Asia", image_url: "", flag_url: "")
d32 = Destination.create(country_or_territory: "Japan", continent: "Asia", image_url: "", flag_url: "")
d33 = Destination.create(country_or_territory: "Taiwan", continent: "Asia", image_url: "", flag_url: "")
d34 = Destination.create(country_or_territory: "Vietnam", continent: "Asia", image_url: "", flag_url: "")
d35 = Destination.create(country_or_territory: "Indonesia", continent: "Asia", image_url: "", flag_url: "")
d36 = Destination.create(country_or_territory: "Philippines", continent: "Asia", image_url: "", flag_url: "")
d37 = Destination.create(country_or_territory: "Malaysia", continent: "Asia", image_url: "", flag_url: "")
d38 = Destination.create(country_or_territory: "Australia", continent: "Oceania", image_url: "", flag_url: "")
d39 = Destination.create(country_or_territory: "New Zealand", continent: "Oceania", image_url: "", flag_url: "")
d40 = Destination.create(country_or_territory: "Thailand", continent: "Asia", image_url: "", flag_url: "")
d41 = Destination.create(country_or_territory: "South Korea", continent: "Asia", image_url: "", flag_url: "")

# def destination_template
#    country = Faker::Address.country_code
#    c = ISO3166::Country.find_country_by_alpha2(country)
#    {country_or_territory: c.name, continent: c.region}
# end

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