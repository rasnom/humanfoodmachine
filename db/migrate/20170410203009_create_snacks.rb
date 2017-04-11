class CreateSnacks < ActiveRecord::Migration
  def change
  	create_table :snacks do |t|
  		t.string :name, null: false, uniqueness: true
  		t.string :ndbno, null: false, uniqueness: true
  		t.string :upc, null: false, uniqueness: true
  		t.string :serving, null: false
  		t.integer :energy, null: false
  		t.integer :protein, null: false
  		t.integer :fat, null: false
  		t.integer :carbohydrates, null: false
  		t.timestamps(null: false)
  	end
  end
end
