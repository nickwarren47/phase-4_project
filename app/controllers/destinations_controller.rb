class DestinationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]
    wrap_parameters format: []

    def index 
        destinations = Destination.all 
        render json: destinations, status: :ok
    end

    def show 
        destination = Destination.find(params[:id])
        render json: destination, include: ["reviews", "reviews.user"], status: :ok
    end
end
