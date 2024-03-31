class AddArrayOfIdsInListings < ActiveRecord::Migration[7.1]
  def change
    change_table :listings do |t|
      t.integer :service_area_ids, array: true, default: []
      t.integer :impact_area_ids, array: true, default: []
      t.integer :categories, array: true, default:[]
    end
  end
end
