class CreateAddedAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :added_albums do |t|
      t.belongs_to :playlist
      t.belongs_to :album
      # t.integer :playlist_id
      # t.integer :album_id
    end
  end
end
