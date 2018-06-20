class CreateLikedAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :liked_albums do |t|
      t.belongs_to :user
      t.belongs_to :album
      # t.integer :playlist_id
      # t.integer :album_id
    end
  end
end
