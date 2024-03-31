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

ActiveRecord::Schema[7.1].define(version: 2024_03_31_023017) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "categories_listings", id: false, force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "category_id", null: false
    t.index ["category_id", "listing_id"], name: "index_categories_listings_on_category_id_and_listing_id"
    t.index ["listing_id", "category_id"], name: "index_categories_listings_on_listing_id_and_category_id"
  end

  create_table "impact_areas", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "impact_areas_listings", id: false, force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "impact_area_id", null: false
    t.index ["impact_area_id", "listing_id"], name: "index_impact_areas_listings_on_impact_area_id_and_listing_id"
    t.index ["listing_id", "impact_area_id"], name: "index_impact_areas_listings_on_listing_id_and_impact_area_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "name"
    t.string "url"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img"
    t.string "bio"
    t.integer "service_area_ids", default: [], array: true
    t.integer "impact_area_ids", default: [], array: true
    t.integer "categories", default: [], array: true
  end

  create_table "listings_service_areas", id: false, force: :cascade do |t|
    t.bigint "listing_id", null: false
    t.bigint "service_area_id", null: false
    t.index ["listing_id", "service_area_id"], name: "index_listings_service_areas_on_listing_id_and_service_area_id"
    t.index ["service_area_id", "listing_id"], name: "index_listings_service_areas_on_service_area_id_and_listing_id"
  end

  create_table "service_areas", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "services", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
