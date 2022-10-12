class PostAndReviewsSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :category, :content
  has_many :reviews
end
