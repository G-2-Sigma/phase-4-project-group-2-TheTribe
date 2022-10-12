class User < ApplicationRecord
    enum user_type: { regular: 0, author: 1}
    has_secure_password

    # has_many :posts
    # has_many :reviews, through: :posts
    # has_many :ratings, through: :posts
    has_many :reviews
    has_many :posts, through: :reviews
    has_many :ratings
    has_many :posts, through: :ratings
    has_many :posts

    validates :username, uniqueness: true, presence: true
    # validates :email, presence: true, uniqueness: true
    validates :bio, presence: true, length:{minimum:20}
    VALID_EMAIL_REGEX= /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/i

    validates :email , presence: true,uniqueness:{case_sensetive:false},
    format:{with:VALID_EMAIL_REGEX,multiline:true}
end
