class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :avatar_url, :watched_entries_by_streamer, :watched_entries_by_streamer_365D, :watched_entries_by_streamer_90D

  def watched_entries_by_streamer
    statusid = Status.find_by(name: "Watched")
    self.object.entries.where(status_id: statusid.id).group(:streamer_id).count
end

# within last 365 days
def watched_entries_by_streamer_365D
  statusid = Status.find_by(name: "Watched")
  self.object.entries.where(status_id: statusid.id, created_at: 1.year.ago..).group(:streamer_id).count
end


# within last 90 days
def watched_entries_by_streamer_90D
  statusid = Status.find_by(name: "Watched")
  self.object.entries.where(status_id: statusid.id, created_at: 3.months.ago..).group(:streamer_id).count
end

end
