class Destination < ApplicationRecord
    has_many :reviews 
    has_many :users, through: :reviews

    validates :country_or_territory, :continent, presence: true
end
