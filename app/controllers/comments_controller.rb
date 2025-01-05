class CommentsController < ApplicationController
  def index
  @comments = Comment.all
  end

  def create
    @comment = Comment.create(content: params[:content])

    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.append(
          'comments-list',
          partial: 'shared/comment',
          locals: { comment: @comment}
        )
      end
      format.html { redirect_to root_path}
    end
  end
end
