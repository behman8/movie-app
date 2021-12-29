class User < ApplicationRecord
    has_secured_password
    has_many :reviews
    has_many :movies, through: :reviews
    validates :username, length: {minimum: 4}
end
