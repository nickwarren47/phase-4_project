class User < ApplicationRecord
    has_many :reviews 
    has_many :destinations, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true 
    validates :email, uniqueness: true
    validates :age, numericality: { within: 18..100 } 
end
