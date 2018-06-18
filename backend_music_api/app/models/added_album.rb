class AddedAlbum < ApplicationRecord
  belongs_to :playlist
  belongs_to :album
end
