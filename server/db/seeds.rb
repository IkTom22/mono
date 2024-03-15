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

Faker::Name.name      #=> "Christophe Bartell"

Faker::Address.full_address #=> "5479 William Way, East Sonnyhaven, LA 63637"

Faker::Markdown.emphasis #=> "Quo qui aperiam. Amet corrupti distinctio. Sit quia *dolor.*"

Faker::TvShows::RuPaul.queen #=> "Violet Chachki"

Faker::Alphanumeric.alpha(number: 10) #=> "zlvubkrwga"

Faker::ProgrammingLanguage.name #=> "Ruby"


Service.create(name: 'Service 1')
Service.create(name: 'Service 2')
User.create({email: "test@test.com", password:"test123"})
15.times do 
    Listing.create({name: Faker::Company.name, url: Faker::Internet.url, description: Faker::Company.catch_phrase})
end