puts "Seeding..."

user1 = User.create(name: "Charlie Brown", username: "Snoopy", email: Faker::Internet.free_email, password: "12345678", age: 20, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user2 = User.create(name: "Sherlock Holmes", username: "221B", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user3 = User.create(name: "John Mycroft", username: "TheDoctor", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user4 = User.create(name: "Arya Stark", username: "Has_No_Name", email: Faker::Internet.free_email, password: "ABC12345678!", age: 20, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user5 = User.create(name: "Jon Snow", username: "Ice_and_Fire", email: Faker::Internet.free_email, password: "ABC12345678!", age: 25, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))

def user_template
   username = Faker::Internet.username
   name = Faker::Name.unique.name
   email= Faker::Internet.free_email
   password = Faker::Internet.password(min_length: 8)
   age = Faker::Number.between(from: 15, to: 99)
   avatar = Faker::Avatar.image(slug: "my-own-slug", size: "50x50")
   location = Faker::Nation.capital_city
   {username: username, name: name, email: email, password: password, age: age, location: location, avatar: avatar}
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

d1 = Destination.create(country_or_territory: "Aruba", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190238381-981e4fd9-0efc-4629-bd6f-3a078ea3ee5e.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190221935-956011df-db84-4797-921d-7822c626ec98.png")
d2 = Destination.create(country_or_territory: "Bahamas", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190222297-ae9fb78b-9251-4dcd-9f88-56efc8d50ba7.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190222441-0f7cde7e-afae-48d9-8b7b-3c079e5e9cac.png")
d3 = Destination.create(country_or_territory: "Jamaica", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223061-0e9d0bd8-c027-4bd7-b3b6-410ccce68de1.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190223124-0bee0593-be7a-4a78-b48a-3d73979c5bd4.png")
d4 = Destination.create(country_or_territory: "Cuba", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223251-4ceec381-7ac3-4a3b-abd4-1a20c81d1138.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190223330-e16574b8-15c1-4421-8886-9ab6cd828153.png")
d5 = Destination.create(country_or_territory: "Domician Republic", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190238630-fe097496-cb0a-4e17-b1c2-d023979edbae.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190223432-e324c7a8-3441-4fd4-b6c6-a33c4485e92a.png")
d6 = Destination.create(country_or_territory: "Seychelles", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223547-c1adab67-5f93-4d06-926a-ecc8cb9c4812.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190223612-08fede4a-ced2-4299-b99b-68afa5890195.png")
d7 = Destination.create(country_or_territory: "United Kingdom", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190223670-c15c7190-7739-4f08-ab5f-40a9ab2f0a74.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190223770-6d14fa4b-44a6-47b1-939a-f98d5a8fe7c7.png")
d8 = Destination.create(country_or_territory: "Germany", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190223822-b30ff3f9-6134-4748-9ec2-7f1cf99a7f65.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190223883-7a60f72a-b506-43d6-9b0b-5de1a071af8c.png")
d9 = Destination.create(country_or_territory: "France", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190238875-ae5186ef-4360-43e9-bae7-6899d66461e6.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190230701-3d23a180-69b9-47b5-9eed-88b05a14f9dc.png")
d10 = Destination.create(country_or_territory: "Spain", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190243165-f816c7f6-3109-4c83-9cc8-d4684ab38b11.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190230884-8fc9aeab-7815-4609-b203-ab0df5083d7e.png")
d11 = Destination.create(country_or_territory: "Greece", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190230961-465c5cb3-9d50-40bf-bc40-10149d8a069b.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231021-9b4deb4c-aefa-44cb-9d5d-3ff0912eb742.png")
d12 = Destination.create(country_or_territory: "Italy", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231092-007cc4cc-4bd6-47fe-b3f3-3a5e8aeba265.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231142-3d406fcc-db30-4259-ac35-fb33e5c9e0d3.png")
d13 = Destination.create(country_or_territory: "Switzerland", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231217-932331e3-75e6-41cf-a589-13c17117b9fe.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231287-1e5e28d4-4494-4f31-a759-803f5532bd93.png")
d14 = Destination.create(country_or_territory: "Netherlands", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231366-c3de1e77-8c35-4c9c-b0e6-7d3572284c94.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231418-a0435d43-83e9-469c-bdd1-0985f73cf621.png")
d15 = Destination.create(country_or_territory: "Belgium", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231488-b4d937fe-0374-4e77-be82-037cdebb8e58.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231580-7719c585-7bae-4c6f-9050-1838f942ef3d.png")
d17 = Destination.create(country_or_territory: "Denmark", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231730-95cf9501-9748-4e0f-855f-5f42cb12b9d5.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231809-95fba1ca-c864-4af1-b382-ae50bbd983d4.png")
d18 = Destination.create(country_or_territory: "Kenya", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190231900-b67198f7-1239-4867-979e-d2bdace44cad.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190231960-c88c81e7-e1da-4364-ba8a-c625a74c64d2.png")
d19 = Destination.create(country_or_territory: "Egypt", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232040-56bf9150-9da6-443a-9f3c-e45b464814a9.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190232085-d1cc6975-d64e-46e8-812f-1fed4cbb8437.png")
d20 = Destination.create(country_or_territory: "Ethiopia", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190243043-6e07c149-a56b-487a-a95c-4733c790eb28.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190232208-8e088161-424f-485b-9000-25040406fe77.png")
d21 = Destination.create(country_or_territory: "South Africa", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190242949-57f893b1-056b-448d-a2cc-92289ad4667c.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190242893-056963a2-d67d-4131-a37b-575de67ffcc0.jpg")
d22 = Destination.create(country_or_territory: "Liberia", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232354-a860ba83-ba31-49f2-a051-ac485481159a.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190232409-c02c386e-d4a9-4a40-981b-1e0ae105d4db.png")
d23 = Destination.create(country_or_territory: "Morocco", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190242799-d1446d9c-3af3-4c41-adf5-21fce69ba486.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190232484-f38f9c3a-ecac-4cd5-811b-3c1cc5e13456.png")
d24 = Destination.create(country_or_territory: "Nigeria", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232594-39974d4c-2968-4af6-8014-3e573baabcdb.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190232659-432b06ea-55f1-4857-94c1-e737236105de.png")
d25 = Destination.create(country_or_territory: "Israel", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190232715-d65fa082-1774-43ae-bdaf-7fa2714e3931.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190232768-3d05bba4-45a0-4cbd-ae2b-f48c9e679f02.png")
d26 = Destination.create(country_or_territory: "Lebananon", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190232865-d7191ccc-fc74-4ecc-9cb0-c915050ca25d.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190232931-92c4905b-e5e5-460a-84ab-df355d3ef4a4.png")
d27 = Destination.create(country_or_territory: "Saudi Arabia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242668-49c7f146-0c5d-4825-9bef-0097da504252.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190233340-9afb4c51-0c96-4592-a09a-9918c822a900.png")
d28 = Destination.create(country_or_territory: "UAE", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242549-e9cd89ac-3258-4cfa-bcdb-6883b0261a59.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190235792-9622d8b0-5847-4411-b580-f9901d205185.png")
d29 = Destination.create(country_or_territory: "Oman", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190235907-0f86b21e-0032-422f-a83a-e85712f0a243.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190242580-46f9abca-a51f-45ce-a6ba-4c1751842115.jpg")
d30 = Destination.create(country_or_territory: "India", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242306-7866c431-34e1-46ec-8428-3157cbd7a52d.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190236631-9fc5d21e-d556-449b-924c-a9054115f059.png")
d31 = Destination.create(country_or_territory: "China", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242262-dda72ee9-29d7-446f-afbc-b0ff95638d25.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190236766-8d0b8465-984d-496a-afeb-2f6c97080006.png")
d32 = Destination.create(country_or_territory: "Japan", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242213-00bd50d0-65c4-4da3-b587-a616d617c8ec.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190236914-8fc73b0f-accf-4b81-b078-16fa0dd69f99.png")
d33 = Destination.create(country_or_territory: "Taiwan", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237017-6ed51e60-3ebf-41a5-8a98-bba481f5b3e1.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237070-8daa6b7c-7fca-43a5-b4f7-80bec5d7f5f7.png")
d34 = Destination.create(country_or_territory: "Vietnam", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237179-e4d636e8-35fb-496f-af9c-888a24cc4728.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237181-51ac27be-3b87-4d7d-97e3-93d2027417c9.png")
d35 = Destination.create(country_or_territory: "Indonesia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237281-61339796-a146-448c-bf8b-2923f1efba7d.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237282-674d7046-9260-4120-a9ec-5d445bb74ccc.png")
d36 = Destination.create(country_or_territory: "Philippines", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242142-6c778885-67de-4600-afde-3bc2320f9ba2.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237425-88d9f8ed-f4f0-4476-ab3e-6c55473ab876.jpg")
d37 = Destination.create(country_or_territory: "Malaysia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237501-6f709eeb-e503-49c5-9d50-e3d819c929a5.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190242106-ba006134-91b4-4c9f-9e56-147a6d69f216.jpg")
d38 = Destination.create(country_or_territory: "Australia", continent: "Oceania", image_url: "https://user-images.githubusercontent.com/106715328/190237703-a12b56ae-1651-412f-bcdd-82a85387ac84.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237756-38eb81de-399a-4a3a-99d7-b729bf45893d.png")
d39 = Destination.create(country_or_territory: "New Zealand", continent: "Oceania", image_url: "https://user-images.githubusercontent.com/106715328/190237825-526c0a74-8929-4ce9-ac2e-ff27799db389.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190237828-a19de5fd-6c71-413d-a6a5-2d9b8e82a167.png")
d40 = Destination.create(country_or_territory: "Thailand", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190238009-e1b26a43-a932-4bb3-ab35-b1762e769519.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190238059-67f2fcf1-6e7b-47fd-9d3d-0f36fdacb1a2.png")
d41 = Destination.create(country_or_territory: "South Korea", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242038-d2b5525e-94c1-4fa8-9ab8-18536bdaf5ca.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190238142-af7ad8cf-fd99-4ae0-b1f0-3463eac4076f.png")

# def destination_template
#    country = Faker::Address.country_code
#    c = ISO3166::Country.find_country_by_alpha2(country)
#    {country_or_territory: c.name, continent: c.region}
# end

25.times do
   User.create(user_template)
end

# 25.times do
#    Destination.create(destination_template)
# end

25.times do
   Review.create(review_template)
end

puts "Finished seeding!"