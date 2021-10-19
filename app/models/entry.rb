class Entry < ApplicationRecord
  belongs_to :user
  belongs_to :streamer
  belongs_to :status

 

  validates :title, presence: true
  validates :show_type, presence: true, inclusion: { in: ["tvshow", "movie", "other"]}
  validates :rating, numericality: { in: 1..10 }
end
