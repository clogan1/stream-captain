class EntriesController < ApplicationController


    def create
        entry = Entry.create!(entries_params)
        render json: entry, status: :created

    end

    def updated
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
        params.permit(:user_id, :streamer_id, :status_id, :title, :show_type, :poster_url, :genre, :rating)
    end
end
