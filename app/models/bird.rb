class Bird < ApplicationRecord
  belongs_to :checklist
  has_many :wishlists, class_name: "Wishlist"
  has_many :users, through: :wishlists
end
