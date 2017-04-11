get '/snacks/new' do 
	erb :'/snacks/new'
end

post '/snacks/new' do
	@search_results = Snack.search(params[:search_terms])
	erb :'/snacks/new'
end