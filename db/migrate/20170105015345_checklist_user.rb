class ChecklistUser < ActiveRecord::Migration[5.0]
  def change
    create_table :checklist_users do |t|
      t.references :checklist
      t.references :user

      t.timestamps
    end
  end
end
