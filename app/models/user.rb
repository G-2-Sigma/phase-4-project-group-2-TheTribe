class User < ApplicationRecord
    has_secure_password
    
    has_many :posts
    has_many :reviews, through: :posts
    has_many :ratings, through: :posts

    validates :username, uniqueness: true, presence: true
    validates :email, presence: true, uniqueness: true
    validates :bio, presence: true, length:{minimum:20}
end
