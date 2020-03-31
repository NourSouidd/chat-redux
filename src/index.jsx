// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from "./reducers/messages_reducer";
import channelsReducer from "./reducers/channels_reducer";
import selectedChannelReducer from "./reducers/selected_channel_reducer";
import currentUserReducer from "./reducers/current_user_reducer";


const initialState = {
  // Store a list of messages
  messages: [],
  // Store a list of channels
  channels: ['general', 'react', 'paris'],
  // Store the selected channel
  selectedChannel: 'general',
  // Store the current username
  currentUser: prompt("What is your username?")
};

// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: channelsReducer,
  selectedChannel: selectedChannelReducer,
  currentUser: currentUserReducer,
});

// redux logger middleware
// display in the console the states
// give your action a promise as payload
const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
