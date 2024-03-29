Rails.application.routes.draw do
  
  
      resources :posts, only: [:index, :show, :create, :update, :destroy]
 
 
  resources :users
  # sessions


  
  post '/login', to:'sessions#login'
  resources :users, only: [:create]
  resources :reviews
 

  # sessions

  post '/login', to:'sessions#login'
  delete '/logout', to: 'sessions#logout'

  # users
  get '/me', to: 'users#show_me'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
