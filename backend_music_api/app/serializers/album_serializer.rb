class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :collectionName, :artistName, :collectionPrice, :artworkUrl100, :collectionId

end
