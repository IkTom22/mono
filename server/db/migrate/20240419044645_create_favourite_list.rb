class CreateFavouriteList < ActiveRecord::Migration[7.1]
  def change
    create_table :favourite_lists do |t|
      t.string :name
      t.timestamps
    end
    add_reference :favourite_lists, :user, foreign_key: true
    create_join_table :listings, :favourite_lists do |t|
      t.index [:listing_id, :favourite_list_id]
      t.index [:favourite_list_id, :listing_id]
    end
  end
end
