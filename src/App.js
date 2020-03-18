import React, { useEffect, useState } from 'react';
import ButtonBar from './ButtonBar/ButtonBar';
import Header from './Header/Header';
import MessageList from './MessageList/MessageList';
import './App.css';
import Axios from 'axios';






const App = () => {

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMessages = () => {
    Axios.get('http://localhost:3000/messages/inbox.json').then(resp => {

      setMessages(resp.data.messages.map(message => {
        message.checked = false;
        return message;
      }))
      setIsLoading(false);
    });
  }

  const checkMessages = (bool) => {
    setMessages(messages.map(message => {
      message.checked = bool;
      return message;
    }));
  }

  const deleteMessages = () => {
    setMessages(messages.reduce((acc, val) => {
      if (!val.checked) {
        acc.push(val);
      }
      return acc;

    }, []));
  }

  const markRead = (bool) => {
    setMessages(messages.map(message => {
      if (message.checked) {
        message.read = bool;
      }
      return message;
    }));
  }

  const setMessageSelected = (checkedMessage, bool) => {

    setMessages(messages.map(message => {
      if (checkedMessage === message) {
        message.checked = bool;
      }
      return message;
    }))
  }

  const addLabel = (action, value) => {
    setMessages(messages.map(message => {
      if (message.checked) {
        if (!message.labels.includes(value) && action === 'add') {
          message.labels.push(value);
        }
        if (message.labels.includes(value) && action === 'remove') {
          message.labels = message.labels.map(label => {
            if (label !== value) {
              return label;
            }
          })
        }
      }
      return message;
    }));
  }



  useEffect(getMessages, []);



  if (isLoading) {
    return <div>is loading...</div>
  }

  return (
    <div className="container">
      <Header headline="Inbox" />
      <ButtonBar messages={messages} checkCallback={checkMessages} deleteCallback={deleteMessages} readmarkCallback={markRead} setLabelCallback={addLabel} />
      <MessageList messages={messages} selectCallack={setMessageSelected} />
    </div>
  );
}

export default App;
