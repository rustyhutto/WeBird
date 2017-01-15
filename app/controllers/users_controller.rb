class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    @checklists = Checklist.includes(:users).where(users: { id: @user.id })
  end

  def new
    @user = User.new
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :location, :groups)
    end
end
