Rails.application.routes.draw do

  get 'checklists/new'

  root 'users#new'
  get 'users/new'
  get    '/login',   to: 'sessions#new'
  post   '/login',   to: 'sessions#create'
  delete '/logout',  to: 'sessions#destroy'

  resources :users
  devise_for :users
  resources :checklists

  namespace :api do
    namespace :v1 do
      resources :checklists, only: [:show, :create, :destroy, :update]
      resources :users, only: [:index, :create, :destroy, :update]
      resources :sessions, only: [:index, :create, :destroy, :update]
    end
  end


end
