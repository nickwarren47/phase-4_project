class DestinationsController < ApplicationController

    def index 
        destinations = Destination.all 
        render json: destinations, status: :ok
    end

    def show 
        destination = Destination.find(params[:id])
        render json: destination, status: :ok
    end
end
