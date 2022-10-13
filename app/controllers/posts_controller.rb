class PostsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    
        def index
            render json: Post.all, status: :ok
        end
    
        def show
            post = Post.find_by!(id:params[:id])
            render json: post, serializer: PostAndReviewsSerializer, status: :ok
        end
    
        def create
            
                post = Post.create!(post_params)
                render json: post   
        end

         def update
            post = Post.find_by(id: params[:id])
            post.update post_params
            render json: post
         end

        def destroy
            post = Post.find_by!(id:params[:id])
            post.destroy
            render json: {}, status: :no_content
        end
    
        private

        def post_params
            params.permit(:title, :content, :category, :user_id)
        end
    
        def not_found_response
            render json: {error: "Post not found"}
        end
    end