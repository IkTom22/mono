class RemoveUnnecessaryColumnsFromListings < ActiveRecord::Migration[7.1]
  def change
    remove_column :listings, :category_id
    remove_column :listings, :impact_area_id
    remove_column :listings, :service_area_id
  end
end
