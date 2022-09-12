class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :image_url, :review, :pro_tip, :length_of_stay, :city
  has_one :user
  has_one :destination
end
