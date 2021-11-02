class EntriesController < ApplicationController
    # def index
    #     render json: Entry.all
    # end

    def create
        entry = Entry.create!(entries_params)
        render json: entry, status: :created

    end

    def update
        entry = Entry.find(params[:id])
        entry.update!(entries_params)
        render json: entry, status: :accepted
    end

    def destroy
        entry = Entry.find(params[:id])
        entry.destroy
        head :no_content
    end

    private

    def entries_params
        params.permit(:user_id, :streamer_id, :status_id, :title, :show_type, :poster_url, :genre, :rating, :imdb_id)
    end
end
