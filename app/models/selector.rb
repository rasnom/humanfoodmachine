class Selector

  def self.pick_by_energy(relative_energy)
    index = (relative_energy.to_f * Snack.all.count).floor
    Snack.all.order('energy')[index]
  end
end
