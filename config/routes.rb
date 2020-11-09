Rails.application.routes.draw do
  root  to:'pages#home'
  get '/galery', to: 'pages#galery', as: 'galery'
  get '/shop', to: 'pages#shop', as: 'shop'
  get '/about', to: 'pages#about', as: 'about'
  get '/services', to: 'pages#services', as: 'services'
  get '/contacts', to: 'pages#contacts', as: 'contacts'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
