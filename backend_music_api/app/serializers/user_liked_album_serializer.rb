class UserLikedAlbumSerializer < ActiveModel::Serializer
  attributes :id, :collectionName, :artistName, :collectionPrice, :artworkUrl100, :collectionId

end
