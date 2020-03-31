// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';


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
const middlewares = applyMiddleware(logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
