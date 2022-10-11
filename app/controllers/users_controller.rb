class UsersController < ApplicationController
    skip_before_action :authorize, only: :create
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      session[:user_type] = user.type
      render json: user, status: :created
    end
  
  
    private
  
    def user_params
      params.permit(:email, :username, :password, :password_confirmation, :profile_picture, :bio , :user_type)
    end
end
