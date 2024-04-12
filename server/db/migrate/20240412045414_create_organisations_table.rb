class CreateOrganisationsTable < ActiveRecord::Migration[7.1]
  def change
    create_table :organisations do |t|
      t.string :name
      t.string :description
      t.string :img_url
      t.timestamps
    end
    add_reference :listings, :organisation, foreign_key: true
  end
end
