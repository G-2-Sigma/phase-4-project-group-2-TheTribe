class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]

    # POST /api/v1/reviews
    def index
      rev = Review.all
      render json: rev
      end
    def create
      review = Review.new(review_params)

      if review.save
        render json: ReviewSerializer.new(review).serialized_json
      else
        render json: errors(review), status: 422
      end
    end

    # DELETE /api/v1/reviews/:id
    def destroy

      review = Review.find_by!(params[:id])

      if review.destroy
        head :no_content
      else
        render json: errors(review), status: 422
      end
    end

    private

    # Strong params
    def review_params
      params.require(:review).permit(:title, :comment, :rating, :post_id)
    end

    # fast_jsonapi serializer
    def serializer(records, options = {})
      ReviewSerializer
        .new(records, options)
        .serialized_json
    end

    def errors(record)
      { errors: record.errors.messages }
    end
  end
