class Status < ApplicationRecord
    has_many :entries

    validates :name, presence: true, inclusion: { in: ["Watched", "In Progress", "To Watch"]}
end
