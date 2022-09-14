class DestinationsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show]

    def index 
        destinations = Destination.all 
        render json: destinations, status: :ok
    end

    def show 
        destination = Destination.find(params[:id])
        render json: destination, status: :ok
    end
end
