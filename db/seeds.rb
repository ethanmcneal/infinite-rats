

Rat.destroy_all
require 'faker'

200.times do |i|
    name = "#{Faker::Games::Minecraft.block} Rat"
    likes = Faker::Number.number(digits: 6)
    Rat.create(name: name, likes: likes)
end

# puts Rat.length