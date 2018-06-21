class LikedAlbumsController < ApplicationController

  def index
    @liked_albums = LikedAlbum.all
    # render html: index template
    render json: @liked_albums
  end

  def create#adding to backend

    user = User.all.find_by(id: params[:user_id])

    album_doesnt_exist_and_is_not_favorited = false
    begin
      user.albums.find(params[:albumId])
    rescue ActiveRecord::RecordNotFound => e
      album_doesnt_exist_and_is_not_favorited = true
    end
    # byebug
# if user.liked_albums contains 'this id' dont add a like
#needs purifying
    if params[:albumId].nil?
      #function1(params)
        alba = Album.create(album_name: params[:collectionName],
        artist_name: params[:artistName],
        price: params[:collectionPrice],
        album_url: params[:artworkUrl100])
      #function1 end
      #function2(objId)
        liked_album = LikedAlbum.new({user_id: params[:user_id], album_id: alba.id})
        liked_album.save
      #function2 end

    elsif album_doesnt_exist_and_is_not_favorited
      if Album.where(id: params[:albumId]) == []
        #
          alba = Album.create(album_name: params[:collectionName],
          artist_name: params[:artistName],
          price: params[:collectionPrice],
          album_url: params[:artworkUrl100], #
          id: params[:albumId])# return.id = params id
          #
        liked_album = LikedAlbum.new({user_id: params[:user_id], album_id: alba.id})
        liked_album.save
          #
      else
        #
        liked_album = LikedAlbum.new({user_id: params[:user_id], album_id: params[:albumId]})
        liked_album.save
        #
      end
    end
    render json: liked_album
  end

  private


end
