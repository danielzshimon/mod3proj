class LikedAlbumsController < ApplicationController
  # protect_from_forgery except: [:create]

  def index
    @liked_albums = LikedAlbum.all
    # render html: index template
    render json: @liked_albums
  end

  def create#adding to backend

    user = User.all.find_by(id: params[:user_id])

    album_exists_but_is_not_favorited = false
    begin
      user.albums.find(params[:albumId])
    rescue ActiveRecord::RecordNotFound => e

      album_exists_but_is_not_favorited = true
    end
    # byebug
# if user.liked_albums contains 'this id' dont add a like
    if params[:albumId].nil?
      alba = Album.create(album_name: params[:collectionName],
        artist_name: params[:artistName],
        price: params[:collectionPrice],
        album_url: params[:artworkUrl100])

        liked_album = LikedAlbum.new({user_id: params[:user_id], album_id: alba.id})
        liked_album.save

    elsif album_exists_but_is_not_favorited
      # byebug
      alba = Album.create(album_name: params[:collectionName],
        artist_name: params[:artistName],
        price: params[:collectionPrice],
        album_url: params[:artworkUrl100],
        id: params[:albumId])

      liked_album = LikedAlbum.new({user_id: params[:user_id], album_id: alba.id})
      liked_album.save
    end


    # liked_album = LikedAlbum.new({user_id: params[:user_id],album_id: alba.id})
    # liked_album.save
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
