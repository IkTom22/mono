class RemoveIdsFromListings < ActiveRecord::Migration[7.1]
  def change
    remove_column :listings, :service_area_ids , Array
    remove_column :listings, :impact_area_ids , Array
    remove_column :listings, :categories , Array
  end
end
