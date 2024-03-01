class CreateListings < ActiveRecord::Migration[7.1]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :url
      t.string :description
      t.timestamps
    end
  end
end
# { 
#   id:1,
#   name: '27Seconds 1', 
#   href:"https://27seconds.co.nz/",
#   description: '27Seconds makes a range of delicious wines suitable for corporate gifts and event catering. Every bottle of wine sold helps a survivor of modern-day slavery.',
#   img: 'images/27Seconds.png', 
#   category: 'Wholesale Trade', 
#   services:'Wine Wholesaling (Gifts & Events)', 
#   impact_area: 'Social inclusion & equity', 
#   service_area:'Aotearoa-wide'
# },