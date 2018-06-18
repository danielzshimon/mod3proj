class Playlist < ApplicationRecord
  belongs_to :user
  has_many :added_albums
  has_many :albums, through: :added_albums

end
