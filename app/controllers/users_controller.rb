class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :destroy]

    def index
      render json: User.all, status: 200
    end
  
    def create
      user = User.create!(user_params)
      session[:user_id] = user.id
      session[:user_type] = user.user_type
      render json: user, status: :created
    end

    def show_me
      render json: @user
    end

    def update
      user = User.find(params[:id])
      user.update!(user_params)
      render json: user, status: :updated
    end
  
    def destroy
      user = User.find(params[:id])
      user.destroy
      head :no_content
    end
  
    private
  
    def user_params
      params.permit(:email, :username, :password, :password_confirmation, :profile_picture, :bio , :user_type)
    end
end
