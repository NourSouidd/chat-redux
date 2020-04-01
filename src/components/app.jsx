import React from 'react';

import MessageList from '../containers/message_list';

const App = () => {
  return (
    <div className="messaging-wrapper">
      <div className="logo-container">
        <img className="messaging-logo" src="https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/4791/s300/logo-big.png" alt="logo" />
      </div>
      <MessageList />
    </div>
  );
};

export default App;
