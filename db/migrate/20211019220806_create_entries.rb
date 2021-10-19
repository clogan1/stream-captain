class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :streamer, null: false, foreign_key: true
      t.belongs_to :status, null: false, foreign_key: true
      t.string :title
      t.string :show_type
      t.string :poster_url
      t.string :genre
      t.float :rating

      t.timestamps
    end
  end
end
