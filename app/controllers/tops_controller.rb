class TopsController < ApplicationController

  def index;end

  def create

    @color = params[:color]
      render turbo_stream: turbo_stream.replace(
        'color-display',
        partial: 'shared/display',
        locals: { color: @color}
    )
  end

  private
  def color_params
    params.require(:color).permit(:color)
  end
end
