class ChatChannel < ApplicationCable::Channel
  
  # フロントエンドの監視
  def subscribed
    stream_from "chat_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

  # chat_channelへデータを送信
  def post(data)
    ActionCable.server.broadcast('chat_channel', data)
  end
end
