class LikedAlbumsController < ApplicationController
  protect_from_forgery except: [:create]

  def index
    @liked_albums = LikedAlbum.all
    # render html: index template
    render json: @liked_animals
  end

  def create
    liked_album = LikedAlbum.new(liked_album_params) #user and album
    liked_album.save
    render json: liked_album
  end

  private

  def liked_album_params
    params.require(:).permit(:name, :gender)
  end

end
