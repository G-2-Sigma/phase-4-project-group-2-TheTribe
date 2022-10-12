class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :profile_picture, :bio, :user_type, :password_digest
end
