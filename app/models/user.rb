class User < ApplicationRecord
  has_many :checklist_users
  has_many :checklists, through: :checklist_users
  has_many :wishlists, class_name: "Wishlist"
  has_many :birds, through: :wishlists
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
