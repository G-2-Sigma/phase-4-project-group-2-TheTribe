Rails.application.routes.draw do
  
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
    end
  end
 
  resources :users
  # sessions


  
  post '/login', to:'sessions#login'
  resources :users, only: [:create]

  # sessions

  post '/login', to:'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
