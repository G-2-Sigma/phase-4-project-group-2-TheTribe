class PostSerializer < ActiveModel::Serializer
  
  attributes :id, :title, :category, :content, :user_id

end
