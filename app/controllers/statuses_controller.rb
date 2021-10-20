class StatusesController < ApplicationController

    def index
        render json: Status.all
    end

end
