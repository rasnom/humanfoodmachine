get '/snacks/new' do
	erb :'/snacks/new'
end

post '/snacks/new' do
	@search_results = Snack.search(params[:search_terms])
	erb :'/snacks/new'
end

get '/snacks' do
  @all_snacks = Snack.all
  erb :'/snacks/index'
end

post '/snacks' do
	ndbno = params[:ndbno]
	@new_snack = Snack.new(ndbno: ndbno)
	if @new_snack.save
    redirect '/snacks'
  else
    @new_snack.errors.add(:api, "issue fetching and saving snack data for #{@new_snack.name}")
    erb :'/snacks/new'
  end
end
