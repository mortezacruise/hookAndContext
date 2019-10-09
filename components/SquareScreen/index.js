import React, {useEffect, useState, useReducer} from 'react';
import {View} from 'react-native';
import ColorCounter from '../ColorCounter/index';
const COLOR_INCREAMENT = 15;
const reducer = (state, action) => {
  console.log({state});
  console.log({action});
  //state === { red:number, green:number ,blue:number}
  // action === { type: "red" || "change_green" || "change_blue" || "change_green" , payload : 15 || -15 }
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : {...state, red: state.red + action.payload};
    case 'change_green':
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : {...state, green: state.green + action.payload};

    case 'change_blue':
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : {...state, blue: state.blue + action.payload};

    default:
      return state;
  }
};
const SquarScreen = () => {
  const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
  const {red, green, blue} = state;
  return (
    <View style={{flex: 1, backgroundColor: 'green'}}>
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'change_red', payload: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_red', payload: -1 * COLOR_INCREAMENT})
        }
        color="red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'change_blue', payload: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_blue', payload: -1 * COLOR_INCREAMENT})
        }
        color="blue"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({type: 'change_green', payload: COLOR_INCREAMENT})
        }
        onDecrease={() =>
          dispatch({type: 'change_green', payload: -1 * COLOR_INCREAMENT})
        }
        color="green"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,
        }}
      />
    </View>
  );
};
export default SquarScreen;
