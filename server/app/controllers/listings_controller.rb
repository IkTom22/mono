class ListingsController < ApplicationController
  before_action :set_listing, only: %i[ show update destroy ]

  # GET /listings
  def index
    @listings = Listing.includes(:categories, :impact_areas, :service_areas, :organisation)
    # logged in?
    if user_signed_in?
      render json: @listings.as_json(include: [:categories, :impact_areas, :service_areas, :organisation])
    else
      @publicListings = @listings.map { |listing| listing.attributes.except("bio") }  
      render json: @publicListings
    end
  end
  
  # GET /listings/1
  def show
    render json: @listing
  end

  # POST /listings
  def create
    @listing = Listing.new(listing_params)

    if @listing.save
      render json: @listing, status: :created, location: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /listings/1
  def update
    if @listing.update(listing_params)
      render json: @listing
    else
      render json: @listing.errors, status: :unprocessable_entity
    end
  end

  # DELETE /listings/1
  def destroy
    @listing.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_listing
      @listing = Listing.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def listing_params
      params.fetch(:listing, {})
    end
end
