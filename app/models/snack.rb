class Snack < ActiveRecord::Base
  validates :name, :nbdno, :upc, :serving, presence: true
  validates :energy, :protein, :fat, :carbohydrates, presence: true
  validates :name, :nbdno, :upc, uniqueness: true
end
