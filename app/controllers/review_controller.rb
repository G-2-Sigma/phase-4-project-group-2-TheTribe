class ReviewController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_review_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    def show
        review = Review.find_by(id: params[:id])
        render json: review, status: :ok
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
        Review.find(params[:id])
    end

    def review_params
        params.permit(:comment)
    end

    def render_review_not_found_response
        render json: {error: "Review not found"}, status: :not_found
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end   
end
