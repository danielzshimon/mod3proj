class UsersController < ApplicationController
  # protect_from_forgery except: [:create]

  def index
    @users = User.all
    render json: @users
  end

  def show
    person = User.all.find_by(id: params['id'])
    render json: person
  end
end
