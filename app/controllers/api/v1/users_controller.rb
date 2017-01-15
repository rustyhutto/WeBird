class Api::V1::UsersController < Api::V1::BaseController

  def show
    @user = User.find(params[:id])
    @checklists = Checklist.includes(:users).where(users: { id: @user.id })
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to @user
    else
      render 'new'
    end
  end

  private

    def user_params
      params.require(:user).permit(:username, :email, :password, :location, :groups)
    end
end