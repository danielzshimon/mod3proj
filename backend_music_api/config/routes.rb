Rails.application.routes.draw do
  resources :albums, only: [:create]
  resources :users, only: [:show, :create, :index] do
    resources :liked_albums, only: [:index, :create,:show, :destroy]
  end
end
