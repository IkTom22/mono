class RemoveFieldsFromListings < ActiveRecord::Migration[7.1]
  def change
    remove_column :listings, :impact_area, :string
    remove_column :listings, :service_area, :string
    remove_column :listings, :category, :string
  end
end
