class StreamersController < ApplicationController

    def index
        render json: Streamer.all
    end
end
