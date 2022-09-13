class User < ApplicationRecord
    has_many :reviews 
    has_many :destinations, through: :reviews

    has_secure_password

    validates :username, presence: true, uniqueness: true
    validates :name, presence: true 
    validates :email, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP } 
    validates :age, numericality: { greater_than_or_equal_to: 18, less_than_or_equal_to: 100 } 
end
