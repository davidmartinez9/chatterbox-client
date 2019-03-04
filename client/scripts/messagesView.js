var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {
    _.each(Messages, (messages) =>{
      var $message = MessageView.render(message);
      MessageView.$chats.prepend($message);
    });
  }

};