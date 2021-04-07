class AddPicToApartment < ActiveRecord::Migration[6.1]
  def change
    add_column :apartments, :pic, :text
  end
end
