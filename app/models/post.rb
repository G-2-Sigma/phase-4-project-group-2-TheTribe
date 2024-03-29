class Post < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews
    belongs_to :user
end
