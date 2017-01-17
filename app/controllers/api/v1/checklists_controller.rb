class Api::V1::ChecklistsController < Api::V1::BaseController
  def index
    @user = User.find(params[:id])
    @checklists = Checklist.includes(:users).where(users: {id: @user.id})
    respond_with @checklists
  end

  def create
    respond_with :api, :v1, Checklist.create(checklist_params)
  end

  def destroy
    respond_with Checklist.destroy(params[:id])
  end

  def update
    checklist = Checklist.find(params["id"])
    checklist.update_attributes(checklist_params)
    respond_with checklist, json: checklist
  end

  private

  def checklist_params
    params.require(:checklist).permit(:location, :date)
  end

end