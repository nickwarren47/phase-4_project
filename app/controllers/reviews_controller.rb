class ReviewsController < ApplicationController
    # remove :create later once login form has been established
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Review.all
    end

    def show
        review = review_find
        render json: review
    end

    def create
        review = Review.create!(review_params)
        # session[:user_id] = user.id
        render json: review, status: :created
    end

    def update
        review = review_find
        review.update!(review_params)
        render json: review
    end

    def destroy
        review = find_review
        review.destroy
        head :no_content
    end

    private

    def review_find
        Review.find(params[:id])
    end

    def review_params
        params.permit(:rating, :image_url, :review, :pro_tip, :length_of_stay, :city, :user_id, :destination_id)
    end
end
