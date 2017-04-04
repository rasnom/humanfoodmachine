get '/sessions/new' do
  erb :'sessions/new'
end

post '/sessions' do
  @user = User.find_by(username: params[:username])
  if @user && User.authenticate(params[:username], params[:password])
    session[:id] = @user.id
    redirect '/'
  else
    @errors = ['username and/or password not found']
    erb :'sessions/new'
  end
end

