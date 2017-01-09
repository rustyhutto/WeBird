Rails.application.routes.draw do
  resources :users

  devise_for :users
  
  get 'users/new'

  root 'users#new'

end
