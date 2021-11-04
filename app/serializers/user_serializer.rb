class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :first_name, :avatar_url, :watched_entries_by_streamer

  def watched_entries_by_streamer
    statusid = Status.find_by(name: "Watched")
    self.object.entries.where(status_id: statusid.id).group(:streamer_id).count
end

end
