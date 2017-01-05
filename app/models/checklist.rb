class Checklist < ApplicationRecord
  has_many :birds
  has_many :checklist_users
  has_many :users, through: :checklist_users
end
