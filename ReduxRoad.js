const initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  cash: 200
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

      case 'sell': {
        if (action.type === 'sell') {
            console.log('You are giving away 20 SUPPLIES in exchange to gain $5 CASH');
            return {
                ...state, supplies: state.supplies - 20, cash: state.cash + 5
            };
        }
      }

      case 'buy': {
        if (action.type === 'buy') {
            console.log('You are gaining 25 SUPPLIES in exchange to lose $15 CASH');
            return {
                ...state, supplies: state.supplies + 25, cash: state.cash - 15
            };
        }
      }

      case 'theft': {
        if (action.type === 'theft') {
            console.log('Outlaws stole half of your CASH');
            return {
                ...state, cash: state.cash / 2
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

wagon = reducer(wagon, {type: 'sell', payload: 1});
console.log(wagon);

wagon = reducer(wagon, {type: 'buy', payload: 1});
console.log(wagon);

wagon = reducer(wagon, {type: 'theft', payload: 1});
console.log(wagon);