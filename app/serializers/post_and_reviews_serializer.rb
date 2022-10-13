class PostAndReviewsSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :category, :content, :user_id
  has_many :reviews
end
