class AddBioFieldToListings < ActiveRecord::Migration[7.1]
  def change
    add_column :listings, :bio, :string
  end
end
