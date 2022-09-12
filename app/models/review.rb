class Review < ApplicationRecord
  belongs_to :user
  belongs_to :destination

  validates :image_url, :city, presence: true
  validates :rating, numericality: { within: 1..5 }
  validates :review, length: { minimum: 250 }
  validates :length_of_stay, numericality: { only_integer: true }
end
