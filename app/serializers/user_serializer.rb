class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :avatar_url
end
