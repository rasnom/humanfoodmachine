class MachinesController < ApplicationController
  def index
    @machines_list = ['Generic Machine','Conspire']
    @stock = ['Chocolate Bar', 'Box of Raisins', 'Bag of Jerky', 'Swiss Cake Roll']
  end
end
