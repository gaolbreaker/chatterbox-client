// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.render();
  },

  render: function() {
    // TODO: Render _all_ the messages.
    for (let i = 0; i < Messages._data.length; i++) {
      MessagesView.renderMessage(Messages._data[i]);
    }
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    // Insert the output from MessageView.render into the DOM
    var $messageHTML = $(MessageView.render({text: message.text, username: message.username}));
    MessagesView.$chats.append($messageHTML);
    // console.log(messageHTML);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).


  }

};

// refer to Message._data for the array of message objects

// MessageView.render({messageText: Message._data[14].text, username: Message._data[14].username});

// var message = {
//   username: 'shawndrost',
//   text: 'trololo',
//   roomname: '4chan'
// };