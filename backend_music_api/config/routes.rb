Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # routes we need? our display
  # users for each users 'playlist'
  # users/id/albums for users liked albums?
  resources :albums
  resources :users, only: [:show, :create] do
    resources :liked_albums, only: [:index, :create]
  end
end
