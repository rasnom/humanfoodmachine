post '/selectors' do
  @snack = Selector.pick_by_energy(params[:relative_energy])
  erb :'/snacks/show'
end
