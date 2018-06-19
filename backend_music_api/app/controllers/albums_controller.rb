class AlbumsController < ApplicationController

  # def index
  #   @albums = Album.all
  #   render json: @albums
  # end

  def create
    test = params['_json']
    allstuff = RestClient.get("https://itunes.apple.com/search?term=#{test}&entity=album&attribute=albumTerm")
    render json: allstuff
  end
end
