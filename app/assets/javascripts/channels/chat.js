App.chat = App.cable.subscriptions.create("ChatChannel", {
  
  // 第一引数：ChatChannel ->　チャンネル名、
  // 第二引数：connected, disconnected, received -> サーバ側での処理
  
  
  connected: function () {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function (data) {
    return $('#chat-index').append('<li>' + data.message + '</li>');
    // Called when there's incoming data on the websocket for this channel
    // このチャンネルにデータが送られる時発動 届いたデータを#idに要素をアペンドする処理を返す
  },

  $(document).on('keypress', '[data-behavior~=chat_post', function(event) {
    if (event.keyCode === 13){
      var chatForm = $('#chat-form');
      App.chat.post(chatForm.val());
      return;
    }
  })
});
