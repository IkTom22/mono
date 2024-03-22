
class Listing < ApplicationRecord
    belongs_to :category
    belongs_to :impact_area
    belongs_to :service_area
end
  