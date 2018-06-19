Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :albums
  resources :user, only: [:show, :create] do
    resources :liked_album, only: [:index, :create]
  end
end
