Rails.application.routes.draw do

  root 'users#new'
  get 'users/new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :users
  devise_for :users

  namespace :api do
    namespace :v1 do
      resources :checklists, only: [:index, :create, :destroy, :update]
      resources :users, only: [:index, :create, :destroy, :update]
      resources :sessions, only: [:index, :create, :destroy, :update]
    end
  end


end
