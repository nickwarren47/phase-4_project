puts "Seeding..."

user1 = User.create(name: "Charlie Brown", username: "Snoopy", email: Faker::Internet.free_email, password: "12345678", age: 20, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user2 = User.create(name: "Sherlock Holmes", username: "221B", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
user3 = User.create(name: "John Watson", username: "TheDoctor", email: Faker::Internet.free_email, password: "12345678", age: 35, location: Faker::Nation.capital_city, avatar: Faker::Avatar.image(size: "50x50", format: 'png'))
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
   destination_id = Faker::Number.between(from: 1, to: 41)
   user_id = Faker::Number.between(from: 1, to: 25)
   {rating: rating, image_url: image_url, destination_id: destination_id, user_id: user_id, length_of_stay: length_of_stay, city: city, pro_tip: pro_tip, review: review}
end

d1 = Destination.create(country_or_territory: "Aruba", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190238381-981e4fd9-0efc-4629-bd6f-3a078ea3ee5e.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548086-ef027350-2aca-482e-9490-674d7fc43dac.jpg")
d2 = Destination.create(country_or_territory: "Bahamas", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190222297-ae9fb78b-9251-4dcd-9f88-56efc8d50ba7.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190548087-c3a1c7e9-34ef-4b83-a830-ed14adb8d0a0.jpg")
d3 = Destination.create(country_or_territory: "Jamaica", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223061-0e9d0bd8-c027-4bd7-b3b6-410ccce68de1.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548088-91ce27b9-96eb-47dd-bf42-56c4c8d5bf70.jpg")
d4 = Destination.create(country_or_territory: "Cuba", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223251-4ceec381-7ac3-4a3b-abd4-1a20c81d1138.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548085-4ea9dbc9-e3fe-483c-9333-6d4011685803.jpg")
d5 = Destination.create(country_or_territory: "Dominican Republic", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190238630-fe097496-cb0a-4e17-b1c2-d023979edbae.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548089-bb825ba1-0001-4ab4-8f02-c8d5732255fd.jpg")
d6 = Destination.create(country_or_territory: "Seychelles", continent: "Island", image_url: "https://user-images.githubusercontent.com/106715328/190223547-c1adab67-5f93-4d06-926a-ecc8cb9c4812.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548090-88de087d-e907-4643-b447-72d13c77cdf0.jpg")
d7 = Destination.create(country_or_territory: "United Kingdom", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190223670-c15c7190-7739-4f08-ab5f-40a9ab2f0a74.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548092-53b0c73e-5705-4a17-991b-3f67859d0cac.jpg")
d8 = Destination.create(country_or_territory: "Germany", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190223822-b30ff3f9-6134-4748-9ec2-7f1cf99a7f65.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190548093-8190f843-3825-4cbe-bcec-baf2afac91c7.jpg")
d9 = Destination.create(country_or_territory: "France", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190238875-ae5186ef-4360-43e9-bae7-6899d66461e6.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548095-3a4e68ee-a82e-4584-b70e-fa75898c6d9d.jpg")
d10 = Destination.create(country_or_territory: "Spain", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190243165-f816c7f6-3109-4c83-9cc8-d4684ab38b11.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548096-acc09140-1233-4b27-9455-5f7208a62fcc.jpg")
d11 = Destination.create(country_or_territory: "Greece", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190230961-465c5cb3-9d50-40bf-bc40-10149d8a069b.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548098-299a9d1a-b45b-4350-a354-6c96e17cc126.jpg")
d12 = Destination.create(country_or_territory: "Italy", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231092-007cc4cc-4bd6-47fe-b3f3-3a5e8aeba265.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548099-a5a5ad94-d4b7-4caf-8ad1-00c730c3dad9.jpg")
d13 = Destination.create(country_or_territory: "Switzerland", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231217-932331e3-75e6-41cf-a589-13c17117b9fe.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548100-f8fafbc2-fcab-4a6d-860c-2d185347bc15.jpg")
d14 = Destination.create(country_or_territory: "Netherlands", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231366-c3de1e77-8c35-4c9c-b0e6-7d3572284c94.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548101-47103313-780a-403a-a550-acd3df136a7d.jpg")
d15 = Destination.create(country_or_territory: "Belgium", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231488-b4d937fe-0374-4e77-be82-037cdebb8e58.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548103-87af6cc2-8054-4822-bbf7-e113afb720e6.jpg")
d17 = Destination.create(country_or_territory: "Denmark", continent: "Europe", image_url: "https://user-images.githubusercontent.com/106715328/190231730-95cf9501-9748-4e0f-855f-5f42cb12b9d5.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548105-933618f8-2882-4aff-af4e-e9722b017335.jpg")
d18 = Destination.create(country_or_territory: "Kenya", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190231900-b67198f7-1239-4867-979e-d2bdace44cad.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548107-db770866-a2f0-4014-ac87-4876be66db3f.jpg")
d19 = Destination.create(country_or_territory: "Egypt", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232040-56bf9150-9da6-443a-9f3c-e45b464814a9.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548112-e3fce9b5-2730-4a8b-ae2d-6fe2809efa72.jpg")
d20 = Destination.create(country_or_territory: "Ethiopia", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190243043-6e07c149-a56b-487a-a95c-4733c790eb28.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548113-4d44b010-6f92-4825-874b-2098285e8572.jpg")
d21 = Destination.create(country_or_territory: "South Africa", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190242949-57f893b1-056b-448d-a2cc-92289ad4667c.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548117-aed3749a-1781-4292-855d-81cf97f59517.jpg")
d22 = Destination.create(country_or_territory: "Liberia", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232354-a860ba83-ba31-49f2-a051-ac485481159a.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548119-b395e558-c2bd-4b0d-b097-f65a524799ce.jpg")
d23 = Destination.create(country_or_territory: "Morocco", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190242799-d1446d9c-3af3-4c41-adf5-21fce69ba486.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548121-4dcfab7b-056d-4ca8-8271-5289e6716de0.jpg")
d24 = Destination.create(country_or_territory: "Nigeria", continent: "Africa", image_url: "https://user-images.githubusercontent.com/106715328/190232594-39974d4c-2968-4af6-8014-3e573baabcdb.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190548124-38102580-cb84-42c4-bd24-13abf2208d32.jpg")
d25 = Destination.create(country_or_territory: "Israel", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190232715-d65fa082-1774-43ae-bdaf-7fa2714e3931.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548127-1ec4f81a-b08b-4bb8-a94b-9ddec80fdd19.jpg")
d26 = Destination.create(country_or_territory: "Lebanon", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190232865-d7191ccc-fc74-4ecc-9cb0-c915050ca25d.jpeg", flag_url: "https://user-images.githubusercontent.com/106715328/190548128-1395fa21-ca99-4768-b4b2-8fa13be4bc79.jpg")
d27 = Destination.create(country_or_territory: "Saudi Arabia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242668-49c7f146-0c5d-4825-9bef-0097da504252.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548131-87a51158-7e83-45f9-9243-477c146d610a.jpg")
d28 = Destination.create(country_or_territory: "United Arab Emirates", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242549-e9cd89ac-3258-4cfa-bcdb-6883b0261a59.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548132-e36086ee-29bc-4253-a696-af85beacb7f6.jpg")
d29 = Destination.create(country_or_territory: "Oman", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190235907-0f86b21e-0032-422f-a83a-e85712f0a243.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548133-5569d1ad-5f56-41b0-8dc6-d51702a1aedf.jpg")
d30 = Destination.create(country_or_territory: "India", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242306-7866c431-34e1-46ec-8428-3157cbd7a52d.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548136-a14a6817-fb7f-417b-bcfd-66dd80abe6f5.jpg")
d31 = Destination.create(country_or_territory: "China", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242262-dda72ee9-29d7-446f-afbc-b0ff95638d25.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548137-a05a6e70-0aa4-426b-98f0-e53b31f3f829.jpg")
d32 = Destination.create(country_or_territory: "Japan", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242213-00bd50d0-65c4-4da3-b587-a616d617c8ec.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548139-6c149c51-1dc5-4357-98cd-d56dc5f54055.jpg")
d33 = Destination.create(country_or_territory: "Taiwan", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237017-6ed51e60-3ebf-41a5-8a98-bba481f5b3e1.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548140-59ca40cc-6b3a-4090-a527-8d623c2cc859.jpg")
d34 = Destination.create(country_or_territory: "Vietnam", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237179-e4d636e8-35fb-496f-af9c-888a24cc4728.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548143-6bce6120-fd85-4cd8-95a1-1a7bd823f2f7.jpg")
d35 = Destination.create(country_or_territory: "Indonesia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237281-61339796-a146-448c-bf8b-2923f1efba7d.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548145-35db5534-eef9-46e2-ac9d-d36a6b9b400a.jpg")
d36 = Destination.create(country_or_territory: "Philippines", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237425-88d9f8ed-f4f0-4476-ab3e-6c55473ab876.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548147-6aa3efda-bdb6-4089-ba92-532cd82269a2.jpg")
d37 = Destination.create(country_or_territory: "Malaysia", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190237501-6f709eeb-e503-49c5-9d50-e3d819c929a5.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548148-73398013-9f6e-4b2c-9372-35f350c2b1e5.jpg")
d38 = Destination.create(country_or_territory: "Australia", continent: "Oceania", image_url: "https://user-images.githubusercontent.com/106715328/190237703-a12b56ae-1651-412f-bcdd-82a85387ac84.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548150-721f45ce-f633-44ba-9c8c-3158aa4099c4.jpg")
d39 = Destination.create(country_or_territory: "New Zealand", continent: "Oceania", image_url: "https://user-images.githubusercontent.com/106715328/190237825-526c0a74-8929-4ce9-ac2e-ff27799db389.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548153-aefc67dd-1501-4ce4-a86d-dbea5f297611.jpg")
d40 = Destination.create(country_or_territory: "Thailand", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190238009-e1b26a43-a932-4bb3-ab35-b1762e769519.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548155-46e89ec8-9367-4daa-be00-a0978faa9334.jpg")
d41 = Destination.create(country_or_territory: "South Korea", continent: "Asia", image_url: "https://user-images.githubusercontent.com/106715328/190242038-d2b5525e-94c1-4fa8-9ab8-18536bdaf5ca.jpg", flag_url: "https://user-images.githubusercontent.com/106715328/190548157-04e5907b-f040-4117-a144-d971dae1d76a.jpg")

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