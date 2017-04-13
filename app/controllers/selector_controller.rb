post '/selectors' do
  @snack = Snack.order("RANDOM()").first
  erb :'/snacks/show'
end
