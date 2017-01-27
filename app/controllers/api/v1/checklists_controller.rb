class Api::V1::ChecklistsController < Api::V1::BaseController
  def show
    @checklist = Checklist.find(params[:id])
    @birds = Bird.where(checklist_id: @checklist.id)
    respond_with @birds
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