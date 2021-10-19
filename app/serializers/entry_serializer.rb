class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :type, :poster_url, :genre, :rating
  has_one :user
  has_one :streamer
  has_one :status
end
