class RatingsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_rate_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
        def index
            render json: rate.all, status: :ok
        end
    
    
        def show
            rate = find_rate
            render json: rate, status: :ok
        end
    
    
        def create
            rate = rate.create!(rate_params)
            render json: rate, status: :created
        end
    
    
        def update
            rate = find_rate
            rate.update!(rate_params)
            render json: rate, status: :ok
        end
    
    
        def destroy
            rate = find_rate
            rate.destroy
            render json: {}
        end
    
        private
    
        def find_rate
            rate.find(params[:id])
        end
    
        def rate_params
            params.permit(:name)
        end
    
        def render_rate_not_found_response
            render json: {error: "rate not found"}, status: :not_found
        end
    
        def render_unprocessable_entity_response(invalid)
            render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end
    end 

