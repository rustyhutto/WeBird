class CreateWishlists < ActiveRecord::Migration[5.0]
  def change
    create_table :wishlists do |t|
      t.references :bird
      t.references :user

      t.timestamps
    end
  end
end
