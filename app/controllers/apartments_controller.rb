class ApartmentsController < ApplicationController
  def index 
    apts = Apartment.all
    render json: apts
  end

  def create 
    apt = Apartment.create(apt_params.merge(user_id: current_user.id))
    p apt
    if apt.valid?
      render json: apt
    else
      render json: apt.errors, status: 422
    end
      
  end



  private
  def apt_params
    params.require(:apartment).permit(:bathrooms, :bedrooms, :city, :email, :manager, :pets, :pic, :price, :state, :street, :user_id)
  end
end
