class AddImdbIdToEntries < ActiveRecord::Migration[6.1]
  def change
    add_column :entries, :imdb_id, :string
  end
end
