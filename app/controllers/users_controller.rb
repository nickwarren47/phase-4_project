class UsersController < ApplicationController
    before_action :authorize, only: [:show]

    def index
        render json: User.all
    end

    def show
        user = user_find
        render json: user
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def user_find
        User.find_by(id: session[:user_id])
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

    def user_params 
        params.permit(:username, :name, :email, :password, :password_confirmation, :age, :location)
    end
end
