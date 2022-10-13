class PostAndReviewsSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :category, :content
  has_many :reviews
end
