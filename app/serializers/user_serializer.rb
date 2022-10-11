class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :profile_picture, :bio, :type, :password_digest
end
