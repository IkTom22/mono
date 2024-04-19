
class Listing < ApplicationRecord
    has_and_belongs_to_many :categories
    has_and_belongs_to_many :impact_areas
    has_and_belongs_to_many :service_areas
    has_and_belongs_to_many :favourite_lists
    belongs_to :organisation
end
  