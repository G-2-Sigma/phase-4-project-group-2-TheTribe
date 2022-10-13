class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :render_review_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  
      def index
          render json: review.all, status: :ok
      end
  
  
      def show
          review = find_review
          render json: review, status: :ok
      end
  
  
      def create
          review = review.create!(review_params)
          render json: review, status: :created
      end
  
  
      def update
          review = find_review
          review.update!(review_params)
          render json: review, status: :ok
      end
  
  
      def destroy
          review = find_review
          review.destroy
          render json: {}
      end
  
      private
  
      def find_review
          review.find(params[:id])
      end
  
      def review_params
          params.permit(:id, :title, :comment, :post_id, :user_id)
      end
  
      def render_review_not_found_response
          render json: {error: "review not found"}, status: :not_found
      end
  
      def render_unprocessable_entity_response(invalid)
          render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end
  end 