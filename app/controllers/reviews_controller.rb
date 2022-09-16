class ReviewsController < ApplicationController
    # remove :create later once login form has been established
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []

    def index
        render json: Review.all
    end

    def show
        review = review_find
        render json: review
    end

    def create
        if session[:user_id] != nil
            review = Review.create!(review_params.merge(:user_id => session[:user_id]))
            render json: review, includes: ['review.user'], status: :created
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        review = review_find
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = review_find
        review.destroy
        head :no_content
    end

    private

    def review_find
        Review.find(params[:id])
    end

    def review_params
        params.permit(:rating, :image_url, :review, :pro_tip, :length_of_stay, :city, :destination_id, :user_id)
    end
end
