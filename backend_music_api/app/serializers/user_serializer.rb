class UserSerializer < ActiveModel::Serializer
  attributes :username
  has_many :albums, serializer: AlbumSerializer
end
