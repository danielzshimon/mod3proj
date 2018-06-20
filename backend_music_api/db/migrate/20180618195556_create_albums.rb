class CreateAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :albums do |t|
      t.string :album_name
      t.string :artist_name
      t.float :price
      t.string :album_url
    end
  end
end
