class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :collectionName
      t.string :artistName
      t.float :collectionPrice
      t.string :artworkUrl100
      t.integer :collectionId
    end
  end
end
