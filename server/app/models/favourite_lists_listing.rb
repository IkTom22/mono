class FavouriteListsListing < ApplicationRecord
    self.table_name = 'favourite_lists_listings'
    belongs_to :listing
    belongs_to :favourite_list
end