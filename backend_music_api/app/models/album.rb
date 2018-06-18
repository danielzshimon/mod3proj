class Album < ApplicationRecord
  has_many :added_albums
  has_many :playlists, through: :added_albums

end
