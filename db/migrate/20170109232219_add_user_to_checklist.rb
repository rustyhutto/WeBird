class AddUserToChecklist < ActiveRecord::Migration[5.0]
  def change
    add_reference :checklists, :user
  end
end
