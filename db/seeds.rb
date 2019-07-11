# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
entries = Post.create([
  {
    "contact":"Lars, lars_thrasher@yahoo.com",
    "title":"Sofa king plush",
    "image":"https://secure.img2-fg.wfcdn.com/im/52236880/resize-h800-w800%5Ecompr-r85/6233/62330388/Derry+Sofa.jpg",
    "description":"Letting go of a gently used micro-fiber blue couch.  We watched 1700 hrs or movies on it.  Could it last much longer?  I certainly think so.  Fourth floor walk-up location.  Must come after 9pm."
  },
  {
    "contact":"Chauncey, ChuChuLaChat@yahoo.com",
    "title":"My human",
    "image":"https://resources.findmeagift.com/site_media/images/products/p_main/acc059-inflatable-unicorn-horn-guy.jpg",
    "description":"Lars no longer hangs out with me.....but if you know about Ruby on Rails, he might be a nice human to have in your house."
  },
  {
    "contact":"John Claude Van Dang, JCVD@hotmail.com",
    "title":"A good book",
    "image":"https://upload.wikimedia.org/wikipedia/en/0/00/Tepig.jpg",
    "description":"A philosophical exploration of being small, and meek, and all of its benefits."
  }
  ])
