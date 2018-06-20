class AlbumsController < ApplicationController
  def create
    test = params['_json']#fix params? prob shouldnt be under _json
    allstuff = RestClient.get("https://itunes.apple.com/search?term=#{test}&entity=album&attribute=albumTerm")
    render json: allstuff
  end
end
