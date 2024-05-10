class FavouriteListsListingsController < ApplicationController
    # GET /favourite_lists
#   def index
#     @favourite_lists = FavouriteList.includes(:listings, :user)
#     # logged in?
#     if user_signed_in?
#       render json: @favourite_lists.as_json(include: [:user,:listings])
#     else
#         render json: { error: 'Forbidden' }, status: :forbidden
#     end
#   end

  # POST /favourite_lists

 
  def create
    if user_signed_in?
        @user = current_user
        @favourite_lists_listing  = FavouriteListsListing.new(listing_id: favourite_lists_listing_params[:listingId], favourite_list_id: favourite_lists_listing_params[:favouriteListId])
        if @favourite_lists_listing.save
            render json: @favourite_lists_listing , status: :created
        else
            render json: @favourite_lists_listing.errors, status: :unprocessable_entity
        end
    else
        render json: { error: 'Forbidden' }, status: :forbidden
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_listing
    #   @listing = Listing.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def favourite_lists_listing_params
      # params.fetch(:favourite_list, {})
      params.permit(:listingId, :favouriteListId)
    end

end
