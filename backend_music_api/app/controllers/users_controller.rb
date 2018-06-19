class UsersController < ApplicationController
  # protect_from_forgery except: [:create]

  def search
    @albums = Album.all

    render json: @albums
  end
  # def index
  #   @playlists = Playlist.all
  #   render json: @playlists
  # end
  #
  # def create
  # end
  #
  # def show
  # end

end
