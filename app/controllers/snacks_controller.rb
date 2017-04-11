get '/snacks/new' do 
	erb :'/snacks/new'
end

post '/snacks/new' do
	@search_results = Snack.search(params[:search_terms])
	erb :'/snacks/new'
end

post '/snacks' do
	ndbno = params[:ndbno]
	new_snack = Snack.new(ndbno: ndbno)
	p new_snack
end