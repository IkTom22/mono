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
        @favourite_list = FavouriteList.new(favourite_list_params)
        if @favourite_list.save
            render json: @favourite_list, status: :created, location: @favourite_list
        else
            render json: @favourite_list.errors, status: :unprocessable_entity
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
    def favourite_list_params
      params.fetch(:favourite_list, {})
    end

end
