class User < ApplicationRecord
  has_many :liked_albums
  has_many :albums, through: :liked_albums


end
