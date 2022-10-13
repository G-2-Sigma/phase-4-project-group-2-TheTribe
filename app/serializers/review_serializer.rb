class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :comment, :post_id, :user_id, :rating
end
