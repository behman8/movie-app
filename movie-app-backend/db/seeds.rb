# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.create(title: "Legend", genre: "Crime/thriller", length: 131, director: "Brian Helgeland" )
Movie.create(title: "The Nun", genre: "Horror", length: 96, director: "Corin Hardy")
Movie.create(title: "Thor: Ragnorak", genre: "Action/adventure", length: 130 , director: "Taika Waititi")
Movie.create(title: "Jumanji: Welcome to the Jungle", genre: "Adventure/comedy", length: 119, director: "Jake Kasdan")
Movie.create(title: "Kingsman: The Secret Service", genre: "Action/comedy" , length: 129, director: "Matthew Vaughn")