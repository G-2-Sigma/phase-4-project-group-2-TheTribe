class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_picture, :bio, :user_type
end
