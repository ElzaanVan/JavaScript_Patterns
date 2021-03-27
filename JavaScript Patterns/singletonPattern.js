//Singleton Pattern 
//Used for creating one user object at a time

const Singleton = (function() {
  let instance;

  function createInstance() {
    const object = new Object({name: "Volkswagen"});
    return object;
  }
  return {
    getInstance: function() {
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// console.log(instance1)
console.log(instance1 === instance2)
