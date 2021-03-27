//This pattern is mostly used for chatrooms (an interface for communicating)
//Remember to implement this with socket io
//Chatroom is the mediator
//The users are the colleagues

const User = function(name) {
  this.name = name;
  this.chatroom = null;
}

User.prototype = {
  send: function(message, to) {
    this.chatroom.send(message, this, to);
  },
  receive: function(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`)
  }
}

const Chatroom = function() {
  let users = {}; //list of users

  return {
    register: function(user) {
      users[user.name] = user;
      user.chatroom = this;
    },
    send: function(message, from, to) {
      if(to) {
        //Single user message
        to.receive(message, from)
      } else {
        //Group message
        for(key in users) {
          if(users[key] !== from) {
            users[key].receive(message, from);
          }
        }
      }
    }
  }
}

const loo = new User("Loo");
const james = new User("James");
const christi = new User("Christi");

const chatroom = new Chatroom();

chatroom.register(loo);
chatroom.register(james);
chatroom.register(christi);

loo.send("Hi Jamesy", james);
christi.send("Whatever!");
