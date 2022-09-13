class UsersController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: User.all
    end

    def show
        render json: @current_user
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    private

    def user_params 
        params.permit(:username, :name, :email, :password, :password_confirmation, :age, :location)
    end
end
