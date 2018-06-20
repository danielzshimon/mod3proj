class LikedAlbumsController < ApplicationController
  # protect_from_forgery except: [:create]

  def index
    @liked_albums = LikedAlbum.all
    # render html: index template
    render json: @liked_albums
  end

  def create#adding to backend
    byebug
# if user.liked_albums contains 'this id' dont add a like
    alba = Album.create(album_name: params[:collectionName],
       artist_name: params[:artistName],
       price: params[:collectionPrice],
       album_url: params[:artworkUrl100])
    liked_album = LikedAlbum.new({user_id: params[:user_id],album_id: alba.id})
    liked_album.save
    render json: liked_album
  end

  private

  def liked_album_params
    params.permit(:user_id)
  end
  def create_album_params
    params.permit(:collectionName, :artistName, :artworkUrl100, :collectionPrice)
  end
  # def album_params
  #   Album.create(album_name: params[:collectionName], artist_name: params[:artistName], price: params[:price], album_url: params[:artworkUrl100])
  #
  # end

end
