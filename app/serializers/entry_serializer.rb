class EntrySerializer < ActiveModel::Serializer
  attributes :id, :title, :show_type, :poster_url, :genre, :rating, :imdb_id
  has_one :user
  has_one :streamer
  has_one :status
end
