class FavouriteListsController < ApplicationController
    # GET /favourite_lists
  def index
    @favourite_lists = FavouriteList.includes(:listings, :user)
    # logged in?
    if user_signed_in?
      render json: @favourite_lists.as_json(include: [:user,:listings])
    else
        render json: { error: 'Forbidden' }, status: :forbidden
    end
  end

  # POST /favourite_lists
  def create
    if user_signed_in?
        @user = current_user
        @favourite_list  = FavouriteList.new(favourite_list_params.merge(user: @user))
        if @favourite_list.save
            render json: @favourite_list, status: :created, location: @favourite_list
        else
            render json: @favourite_list.errors, status: :unprocessable_entity
        end
    else
        render json: { error: 'Forbidden' }, status: :forbidden
    end
  end
  def remove_listing
    favourite_list = FavouriteList.find(params[:id])
    listing = Listing.find(params[:listing_id])
    favourite_list_listing = FavouriteListsListing.find_by(favourite_list_id: favourite_list.id, listing_id: listing.id)
    puts "THIS IS THE RESULT:  #{favourite_list_listing.listing_id}"
    # Assuming FavouriteList has a `has_many :listings, through: :favourite_list_listings` association
    if favourite_list_listing
      sql = "DELETE FROM favourite_lists_listings WHERE favourite_list_id = #{favourite_list.id} AND listing_id = #{listing.id}"
      ActiveRecord::Base.connection.execute(sql)
      render json: { message: 'Listing removed successfully' }, status: :ok
    else
      render json: { error: 'Failed to remove listing' }, status: :unprocessable_entity
    end
  end
  private
    # Use callbacks to share common setup or constraints between actions.
    # def set_listingj
    #   @listing = Listing.find(params[:id])
    # end

    # Only allow a list of trusted parameters through.
    def favourite_list_params
      # params.fetch(:favourite_list, {})
      params.require(:favourite_list).permit(:name)
    end

end
