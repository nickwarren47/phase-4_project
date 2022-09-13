class Review < ApplicationRecord
  belongs_to :user
  belongs_to :destination

  validates :image_url, :city, presence: true
  validates :rating, numericality: { greater_than_or_equal_to: 0, less_than_or_equal_to: 5}
  validates :review, length: { minimum: 250 }
  validates :length_of_stay, numericality: { only_integer: true }
end
