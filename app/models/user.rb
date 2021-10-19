class User < ApplicationRecord
    has_secure_password
    has_many :entries

    validates :username, presence: true, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :first_name, presence: true
    validates :password, presence: true, length: { in: 6..40, too_short: "Your password must be at least 6 characters long" }, on: :create
end
