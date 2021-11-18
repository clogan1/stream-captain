Rails.application.routes.draw do
  
  resources :entries
  resources :statuses, only: [:index]
  # resources :users
  resources :streamers, only: [:index]

  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/myentries', to: 'users#myentries'
  get '/myentries_oldest', to: 'users#myentriesoldest'


  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
