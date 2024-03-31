class CreateJoinTables < ActiveRecord::Migration[7.1]
  def change
    create_join_table :listings, :categories do |t|
      t.index [:listing_id, :category_id]
      t.index [:category_id, :listing_id]
    end
    create_join_table :listings, :impact_areas do |t|
      t.index [:listing_id, :impact_area_id]
      t.index [:impact_area_id, :listing_id]
    end
    create_join_table :listings, :service_areas do |t|
      t.index [:listing_id, :service_area_id]
      t.index [:service_area_id, :listing_id]
    end
  end
end
