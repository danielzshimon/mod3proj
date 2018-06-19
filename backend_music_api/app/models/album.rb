class Album < ApplicationRecord
  has_many :liked_albums
  # belongs_to :user, through: :liked_albums

end
