class ChecklistsController < ApplicationController
  def new
    
  end

  def show
    @checklist = Checklist.find(params[:id])
    @checklist.as_json
  end
  
end
