Rails.application.routes.draw do
  resources :listings
  devise_for :users, controllers: { sessions: 'users/sessions', registrations:'users/registrations'}
  devise_scope :user do
    get 'check_user', to: 'users/sessions#check_user'
  end
  resources :services
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
  # resources :favourite_lists
  resources :favourite_lists_listings
  # config/routes.rb
  resources :favourite_lists do
    delete 'remove_listing/:listing_id', to: 'favourite_lists#remove_listing', on: :member
  end
  delete 'remove_listing_from_all_lists/:listing_id', to: 'favourite_lists#remove_listing_from_all_lists'
end
