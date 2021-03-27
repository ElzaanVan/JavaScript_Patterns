//OBSERVER PATTERN
//ALLOWS US TO SUBSCRIBE OR UNSUBSCRIBE TO CERTAIN EVENTS OR FUNCTIONALITY

//PROTOTYPES
function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`Subscribed to ${fn.name}`)
  },
  unsubscribe: function(fn) {
    //Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers.
    this.observers = this.observers.filter(function(item){
      if(item !== fn) {
        return item;
      }
    });
    console.log(`You are unsubscribed from ${fn.name}`)
  },
  fire: function() {
    this.observers.forEach((item) => {
      item.call();
    });
  }
}

const click = new EventObserver();

//Create event listeners
document.querySelector(".sub-ms").addEventListener("click", () => {
  click.subscribe(getCurrentMS)
});
document.querySelector(".unSub-ms").addEventListener("click", () => {
  click.unsubscribe(getCurrentMS)
});
document.querySelector(".fire").addEventListener("click", () => {
  click.fire();
});
//Event listener for Seconds
document.querySelector(".sub-s").addEventListener("click", () => {
  click.subscribe(getCurrentS)
});
document.querySelector(".unSub-s").addEventListener("click", () => {
  click.unsubscribe(getCurrentS)
});


//Click Handler for Milliseconds
const getCurrentMS = function () {
  console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`);
}
//Click Handler for Seconds
const getCurrentS = function () {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}