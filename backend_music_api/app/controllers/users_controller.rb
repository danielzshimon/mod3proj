class UsersController < ApplicationController
  # protect_from_forgery except: [:create]

  def search
    @users = User.all
    render json: @users
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
