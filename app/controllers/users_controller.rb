class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @user.as_json(only: [:username, :location, :groups])
  end

  def new
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :location, :groups)
    end
end
