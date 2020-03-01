// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.event = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if(this.event[eventName] != undefined){
      this.event[eventName].push(callback);
    }
    else {
      this.event[eventName] = [callback]; //not = callback;
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    for(let cb of this.event[eventName]){
      cb();
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.event[eventName] =  []; //not setting null since trigger gets problem
  }
}

module.exports = Events;
