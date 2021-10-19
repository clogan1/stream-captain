class Streamer < ApplicationRecord
    has_many :entries

    validates :name, presence: true, inclusion: { in: ["Netflix", "Hulu", "Amazon Prime", "Apple TV+", "Disney+", "HBO Max", "Paramount+", "Peacock", "Cable Provider", "Other"]}
    validates :logo, presence: true
end
