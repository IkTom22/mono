class FavouriteListsListing < ApplicationRecord
    belongs_to :listing
    belongs_to :favourite_list
end