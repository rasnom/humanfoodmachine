class Selector
  attr_reader :num_choices

  def self.pick_by_energy(relative_energy)
    p "*" * 40
    p "relative energy #{relative_energy}"
    p "snack count #{Snack.all.count}"
    index = (relative_energy.to_f * Snack.all.count).floor
    p "index #{index}"
    Snack.all.order('energy')[index]
  end
end
