class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render turbo_stream: turbo_stream.append(
        'task-list',
        partial: 'tasks/task',
        locals: { task: @task }
      )
    else
      head :unprocessable_entity
    end
  end

  private

  def task_params
    params.require(:task).permit(:name)
  end
end
