//Module Pattern
//Basic Structure IFFE

// (function() {
//   //Declare private variables and functions

//   return {
//   //Declare public variables and functions

//   }
// })();

//STANDARD MODULE PATTERN
const UICtrl = (function() {
  //PRIVATE
  const text = "Hello World"

  const changeText = function () {
    document.querySelector("h1").textContent =  text
  }
  return {
  //PUBLIC
    callChangeText: function () {
      changeText();
      //Can still access data from private
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();

//Cannot access private function such as changeText

//REVEALING MODULE PATTERN  
const itemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log("Item added")
  }

  function get(id){
    return data.find(item => {
      return item.id === id
    });
  }

  return {
    //We are returning an object literal that reveals "private" methods
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: "Car"});
itemCtrl.add({id: 2, name: "Boat"})
itemCtrl.add({id: 3, name: "Bicycle"})

console.log(itemCtrl.get(3));