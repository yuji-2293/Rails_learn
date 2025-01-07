class MemosController < ApplicationController
  def index
    @memos = Memo.all
  end

  def create
    @memo = Memo.new(memo_params)
    if @memo.save
      render turbo_stream: turbo_stream.append(
        'memo-list',
        partial: 'memos/memo',
        locals: { memo: @memo }
      )
    else
      head :unprocessable_entity
    end
  end

  private

  def memo_params
    params.require(:memo).permit(:content, :completed)
  end
end
