class SessionsController < ApplicationController
  def new
  end

  def destroy
    log_out
    redirect_to root_url
  end
end
