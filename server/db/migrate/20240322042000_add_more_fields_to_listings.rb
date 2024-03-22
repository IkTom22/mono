class AddMoreFieldsToListings < ActiveRecord::Migration[7.1]
  def change
    add_column :listings, :img, :string 
    add_column :listings, :category, :string #TODO: make this it's own table
    add_column :listings, :impact_area, :string #TODO: make this it's own table
    add_column :listings, :service_area, :string #TODO: make this it's own table
    add_column :listings, :services, :string 
  end
end
