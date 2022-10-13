class ReviewsController < ApplicationController
  before_action :authorize, only: [:index, :create]

    # POST /api/v1/reviews
    def index
      rev = Review.all
      render json: rev
      end

      def show
        review = Review.find_by!(id:params[:id])
        render json: review,  status: :ok
    end 
    def create
      review = Review.create!(review_params)
      render json: review
    end

    # DELETE /api/v1/reviews/:id
    def destroy

    review = Review.find(params[:id])
      review.destroy 
      head :no_content
    end

    private

    # Strong params
    def review_params
      params.require(:review).permit(:title, :comment, :rating, :post_id, :user_id)
    end

  
  end
