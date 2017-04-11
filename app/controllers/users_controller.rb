get '/users/new' do
	erb :'users/new', layout: false
end

post '/users' do
	new_user = User.new(params[:user])
	if new_user.save
		session[:id] = new_user.id
		redirect '/'
	else
		@errors = ['Something went wrong with registration.']
		erb :'users/new', layout: false
	end
end

