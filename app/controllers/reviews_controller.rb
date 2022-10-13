class ReviewsController < ApplicationController
  skip_before_action :authorize, only: [:index, :create]
  def index
    reviews = review.all
    render json: ReviewSerializer.new(reviews).serialized_json
end

def show
    review = review.find_by(id: params[:id])
    render json: ReviewSerializer.new(review).serialized_json
end

def create
    review = review.new(review_params)

    if review.save
        render json: ReviewSerializer.new(review).serialized_json
    else
       render json: {error: review.errors.messages}, status: 422
    end
end

def update
    review = review.find_by(id: params[:id])

    if review.update(review_params)
        render json: ReviewSerializer.new(review).serialized_json
    else
       render json: {error: review.errors.messages}, status: 422
    end
end

def destroy
    review = review.find_by(id: params[:id])

    if review.destroy
        head :no_content
    else
       render json: {error: review.errors.messages}, status: 422
    end
end

private

def review_params
    params.require(:review).permit(:id, :title, :comment, :post_id, :user_id)
end
end
