class CreateRelatedTablesForListings < ActiveRecord::Migration[7.1]
  def change
    create_table :categories do |t|
      t.string :name
      t.timestamps
    end
    create_table :impact_areas do |t|
      t.string :name
      t.timestamps
    end
    create_table :service_areas do |t|
      t.string :name
      t.timestamps
    end
    add_reference :listings, :category, foreign_key: true
    add_reference :listings, :impact_area, foreign_key: true
    add_reference :listings, :service_area, foreign_key: true
  end
end
