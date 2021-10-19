# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


puts "start seeding"

# puts "seeding streamers"

# Streamer.create(name: 'Netflix', logo: 'https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png' )
# Streamer.create(name: 'Hulu', logo: 'https://logodix.com/logo/555032.png' )
# Streamer.create(name: 'Amazon Prime', logo: 'https://www.citypng.com/public/uploads/preview/-1159629574507zqo9azzc.png' )
# Streamer.create(name: 'Apple TV+', logo: 'https://hd-report.com/wp-content/uploads/2019/10/apple-tv-plus-logo-app.png')
# Streamer.create(name: 'Disney+', logo: 'https://downloadwap.com/thumbs2/android/thumbs/ico/new/1/s/disney-disneyplus-android.jpg')
# Streamer.create(name: 'HBO Max', logo: 'https://hbomax-images.warnermediacdn.com/2020-05/square%20social%20logo%20400%20x%20400_0.png' )
# Streamer.create(name: 'Paramount+', logo: 'https://static.wikia.nocookie.net/logopedia/images/8/82/Paramount%2B_2017.svg/revision/latest?cb=20191218190254' )
# Streamer.create(name: 'Peacock', logo: 'https://vpn-services.bestreviews.net/wp-content/uploads/sites/13/peacock-logo-square.png' )
# Streamer.create(name: 'Cable Provider', logo: 'https://www.freeiconspng.com/thumbs/television-icon/tv-icon-13.png' )
# Streamer.create(name: 'Other', logo: '')

# puts 'done streamers'

# puts 'seeding status'

# Status.create(name: 'Watched')
# Status.create(name: 'In Progress')
# Status.create(name: 'To Watch')

# puts 'done with status'

# puts 'seeding user'

# User.create(username: 'clogan', email: 'clairelogan16@gmail.com', first_name: 'Claire', avatar_url: 'https://avatars.githubusercontent.com/u/77256559?v=4', password: 'flatiron2021' )

# puts 'done with user'

# puts "make entries"

# Entry.create(user_id: 1, streamer_id: 1, status_id: 2, title: "Squid Game", show_type: "tvshow", poster_url: 'https://m.media-amazon.com/images/M/MV5BYWE3MDVkN2EtNjQ5MS00ZDQ4LTliNzYtMjc2YWMzMDEwMTA3XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg', genre: 'Action, Drama, Mystery')
Entry.create(user_id: 1, streamer_id: 6, status_id: 1, title: "Succession", show_type: "tvshow", poster_url: 'https://m.media-amazon.com/images/M/MV5BZDE0ODVlYjktNjJiMC00ODk4LWIwNTktMWRhZmZiOGFhYmUwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg', genre: 'Drama', rating: 9)

# puts 'done with entries'

puts "done seeding"