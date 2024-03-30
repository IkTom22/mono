class RemoveServicesFromListings < ActiveRecord::Migration[7.1]
  def change
    remove_column :listings, :services, :string 
  end
end
