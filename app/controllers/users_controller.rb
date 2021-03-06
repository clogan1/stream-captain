class UsersController < ApplicationController
    before_action :authorize, except: :create

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    def myentries
        user = User.find_by(id: session[:user_id])
        entries = user.entries
        render json: entries
    end

    def myentriesoldest
        user = User.find_by(id: session[:user_id])
        entries = user.entries.order("created_at DESC")
        render json: entries
    end

    private
    def user_params
        params.permit(:username, :email, :first_name, :avatar_url, :password, :password_confirmation)
    end

end
