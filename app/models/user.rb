class User < ApplicationRecord
    has_many :posts
    has_many :reviews, through: :posts
    has_many :ratings, through: :posts
end
