require 'rest-client'

class AlbumsController < ApplicationController

  def index
    render json: RestClient.get('https://itunes.apple.com/search?term=dookie')
  end
end
# def search
#   @users = User.all
#   render json: @users
# end
