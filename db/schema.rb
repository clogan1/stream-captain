# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_10_26_173415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "entries", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "streamer_id", null: false
    t.bigint "status_id", null: false
    t.string "title"
    t.string "show_type"
    t.string "poster_url"
    t.string "genre"
    t.float "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "imdb_id"
    t.index ["status_id"], name: "index_entries_on_status_id"
    t.index ["streamer_id"], name: "index_entries_on_streamer_id"
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "statuses", force: :cascade do |t|
    t.string "name"
  end

  create_table "streamers", force: :cascade do |t|
    t.string "logo"
    t.string "name"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "first_name"
    t.string "avatar_url"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "entries", "statuses"
  add_foreign_key "entries", "streamers"
  add_foreign_key "entries", "users"
end
