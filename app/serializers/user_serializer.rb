class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :password_digest, :age, :location
end