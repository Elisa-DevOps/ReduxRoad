const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0
  };

  const reducer = (state = initialWagonState, action) => {
    switch (action.type) {
      case 'gather': {
        if (action.type === 'gather') {
          return {
            ...state, supplies: state.supplies + 15, days: state.days + 1
          };
        }
      }

      case 'travel': {
        if (action.type === 'travel') {
          let negSupplies = state.supplies - (20 * action.payload);
          if (negSupplies < 0) {
            console.log(`You do not have enough SUPPLIES to travel safely. Please see your current wagon below!`)
            return state;
          } else {
            return {
            ...state, supplies: state.supplies - (20 * action.payload), distance: state.distance + (action.payload*10), days: state.days + action.payload
          }};
        }
      }

      case 'tippedWagon': {
        if (action.type === 'tippedWagon') {
          return {
            ...state, supplies: state.supplies - 30, days: state.days + 1
          };
        }
      }
      
      default: {
        return state;
      }
    }
  };

let wagon = reducer(undefined, {});
console.log(wagon);

wagon = reducer(wagon, {type: 'travel', payload: 1});
console.log(wagon);

wagon = reducer(wagon, {type: 'gather', payload: 0});
console.log(wagon);

wagon = reducer(wagon, {type: 'tippedWagon', payload: 0});
console.log(wagon);

wagon = reducer(wagon, {type: 'travel', payload: 3});
console.log(wagon);

wagon = reducer(wagon, {type: 'travel', payload: 8});
console.log(wagon);