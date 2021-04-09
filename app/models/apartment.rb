class Apartment < ApplicationRecord
  validates :bathrooms, :bedrooms, :city, :email, :manager, :pets, :pic, :price, :state, :street, :user_id, presence: true
  belongs_to :user
end
