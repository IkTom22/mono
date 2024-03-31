# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
require 'faker'

# Faker::Name.name      #=> "Christophe Bartell"

# Faker::Address.full_address #=> "5479 William Way, East Sonnyhaven, LA 63637"

# Faker::Markdown.emphasis #=> "Quo qui aperiam. Amet corrupti distinctio. Sit quia *dolor.*"

# Faker::TvShows::RuPaul.queen #=> "Violet Chachki"

# Faker::Alphanumeric.alpha(number: 10) #=> "zlvubkrwga"

# Faker::ProgrammingLanguage.name #=> "Ruby"


# Service.create(name: 'Service 1')
# Service.create(name: 'Service 2')
# Category.create(name:'Category 1')
# Category.create(name:'Category 2')
# Category.create(name:'Category 3')
# ImpactArea.create(name:'ImpactArea 1')
# ImpactArea.create(name:'ImpactArea 2')
# ImpactArea.create(name:'ImpactArea 3')
# ServiceArea.create(name:'ServiceArea 1')
# ServiceArea.create(name:'ServiceArea 2')
# ServiceArea.create(name:'ServiceArea 3')
User.create({email: "test@test.com", password:"test123"})

# ------CHATGPT SUGGESTS-----
# Seed Categories
categories = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5']
categories.each do |category_name|
  Category.find_or_create_by(name: category_name)
end

# Seed ImpactAreas
impact_areas = ['ImpactArea 1', 'ImpactArea 2', 'ImpactArea 3', 'ImpactArea 4', 'ImpactArea 5' ]
impact_areas.each do |impact_area_name|
  ImpactArea.find_or_create_by(name: impact_area_name)
end

# Seed ServiceAreas
service_areas = ['ServiceArea 1', 'ServiceArea 2', 'ServiceArea 3', 'ServiceArea 4','ServiceArea 5']
service_areas.each do |service_area_name|
  ServiceArea.find_or_create_by(name: service_area_name)
end

# Seed Listings with associations
# 15.times do 
#   category = Category.all.sample
#   impact_area = ImpactArea.all.sample
#   service_area = ServiceArea.all.sample

#   Listing.create({
#     name: Faker::Company.name, 
#     url: Faker::Internet.url, 
#     description: Faker::Company.catch_phrase,
#     bio: Faker::Company.profession,
#     img: Faker::Company.logo,
#     category: category,
#     impact_area: impact_area,
#     service_area: service_area
#   })
# end
15.times do 
  listing = Listing.create({
    name: Faker::Company.name, 
    url: Faker::Internet.url, 
    description: Faker::Company.catch_phrase,
    bio: Faker::Company.profession,
    img: Faker::Company.logo
  })
  listing.categories << Category.all.sample(2)
  listing.impact_areas << ImpactArea.all.sample(3)
  listing.service_areas << ServiceArea.all.sample(2)
end



# 15.times do 
#     Listing.create({
#         name: Faker::Company.name, 
#         url: Faker::Internet.url, 
#         description: Faker::Company.catch_phrase,
#         bio: Faker::Company.profession,
#         img: Faker::Company.logo,
#         # category: category,
#         # impact_area: impact_area,
#         # service_area: service_area
#     })
# end
# 15.times do |i|
#     listing = Listing.new({
#       name: Faker::Company.name, 
#       url: Faker::Internet.url, 
#       description: Faker::Company.catch_phrase,
#       bio: Faker::Company.profession,
#       img: Faker::Company.logo,
#     })
    
#     if listing.save
#       puts "Listing #{i + 1} created successfully"
#     else
#       puts "Error creating listing #{i + 1}: #{listing.errors.full_messages.to_sentence}"
#     end
#   end
  


