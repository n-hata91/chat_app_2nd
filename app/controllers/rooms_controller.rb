class RoomsController < ApplicationController
  def show
    @rooms = Room.all
  end

  def create
    @room = Room.new(text: params[:message])
    @room.save
  end
  
end
