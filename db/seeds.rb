# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Rat.destroy_all
require 'faker'

500.times do |i|
    name = "#{Faker::Games::Minecraft.block} Rat"
    likes = Faker::Number.number(digits: 6)
    Rat.create(name: name, likes: likes)
end

# puts Rat.length