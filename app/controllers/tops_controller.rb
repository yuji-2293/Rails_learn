class TopsController < ApplicationController

  def index;end

  def create
    @color = params[:color]
      render turbo_stream: turbo_stream.replace(
        'color-display',
        partial: 'tops/display',
        locals: { color: @color}
    )
  end

end
