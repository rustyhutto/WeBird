class CreateChecklists < ActiveRecord::Migration[5.0]
  def change
    create_table :checklists do |t|
      t.references :bird
      t.string :location
      t.date :date

      t.timestamps
    end
  end
end
