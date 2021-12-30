class MoviesController < ApplicationController

    def index
        render json: Movie.all, status: :ok
    end

    def show
        movie = Movie.find(params[:id])
        if movie
            render json: card, status: :ok
        else
            render json: { errors: "Movie does not exist" }, status: :unprocessable_entity
        end
    end

end
