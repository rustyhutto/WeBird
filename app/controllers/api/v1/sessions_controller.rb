class Api::V1::SessionsController < Api::V1::BaseController

  def new

  end

  def create
    user = User.find_by(email: params[:session][:email].downcase)
    if user && user.authenticate(params[:session][:password])
      log_in(user)
      respond_with user, json: user.id
    else
      render 'new'
    end
  end

  def destroy
    log_out
    redirect_to root_url
  end
end