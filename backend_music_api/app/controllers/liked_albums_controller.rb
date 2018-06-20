class LikedAlbumsController < ApplicationController
  # protect_from_forgery except: [:create]

  def index
    @liked_albums = LikedAlbum.all
    # render html: index template
    render json: @liked_albums
  end

  def create
    alba = Album.find_or_create_by(liked_album_params[:collectionName,:artistName, :collectionPrice, :artworkUrl100])
    liked_album = LikedAlbum.new({user_id: liked_album_params[:user_id],album_id: alba.id}) #user and album
    liked_album.save
    render json: liked_album
  end

  private

  def liked_album_params
    params.permit(:collectionName, :artistName, :artworkUrl100, :collectionPrice, :user_id)
  end

end
