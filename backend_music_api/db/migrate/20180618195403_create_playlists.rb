class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.belongs_to :user
      t.string :playlist_name
    end
  end
end
