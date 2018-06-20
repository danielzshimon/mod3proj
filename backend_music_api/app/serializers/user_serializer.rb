class UserSerializer < ActiveModel::Serializer
  attributes :username, :albums
  has_many :albums, serializer: UserLikedAlbumSerializer
end
