class UserSerializer < ActiveModel::Serializer
  attributes :id, :userusername, :email, :profile_picture, :bio, :user_user_type
end
