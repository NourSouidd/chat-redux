import React from "react";

const Message = (props) => {
  function strToColor(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i += 1) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    const c = (hash & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return `#${"00000".substring(0, 6 - c.length)}${c}`;
  }

  const { author, content, created_at } = props.message;
  const time = new Date(created_at).toLocaleTimeString();
  return (
    <div className="message-container">
      <i className="author">
        <span style={{ color: strToColor(author) }}>{author} {time}</span>
      </i>
      <p>{content}</p>
    </div>
  );
};


export default Message;
