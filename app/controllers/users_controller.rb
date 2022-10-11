class UsersController < ApplicationController
    validates :username, uniqueness: true, presence: true
    validates :email, presence: true, uniqueness: true
    validates :bio, presence: true, length:{minimum:20}
end
