class CreateBirds < ActiveRecord::Migration[5.0]
  def change
    create_table :birds do |t|
      t.references :checklist
      t.string :species 
      t.decimal :lat, precision: 10, scale: 6, default: 0.1
      t.decimal :lng, precision: 10, scale: 6, default: 0.1
      t.integer :count
      t.string :vegetation
      t.string :habitat

      t.timestamps
    end
  end
end
