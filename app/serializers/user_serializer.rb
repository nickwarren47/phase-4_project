class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :name, :email, :age, :location, :avatar

  has_many :reviews
end
