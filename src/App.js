import React, { useEffect, useState } from 'react';
import './App.css';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar} from '@fortawesome/free-regular-svg-icons'
import { faSquare, faCheckSquare} from '@fortawesome/free-regular-svg-icons'



const Header = ({ headline }) => {
  return <div className='jumbotron'>
    <h1 className="display-4">{headline}</h1>
    <hr className="my-4"></hr>
    <p>@christianjunge</p>
  </div>
}

const ButtonBar = ({checkMessages}) => {
  const [bulkCheck, setBulkCheck] = useState(false);
    const updateBulkCheck = () => {
      setBulkCheck(!bulkCheck);
      checkMessages(!bulkCheck);
    }


  return (
    <div>
      <button onClick={() => updateBulkCheck()}><FontAwesomeIcon icon={bulkCheck ? faCheckSquare : faSquare}/></button>
   </div>
  );
}

const Message = ({ message }) => {
  

  const [starred, setStarred] = useState(message.starred);
  const [selected, setSelected] = useState(message.checked);
 
  const toggleCheckStatus = (message) => {
    message.checked = !message.checked;
     setSelected(message.checked);
  }
  const toggleStarStatus = (message) => {
    message.starred = !message.starred;
    setStarred(!starred);
  }

  return (
  <tr className={ message.checked ?  "table-warning" : message.read ? "table-secondary" : ""}>
    <td>
      <input  className="mr-2" type="checkbox"  checked={message.checked} onChange={() => toggleCheckStatus(message)}/>
   </td>
    <td>
      <FontAwesomeIcon className="mr-2" icon={starred ? fullStar : emptyStar } onClick={() => toggleStarStatus(message)}/> 
    </td>
    <td className="mr-5">
      {message.labels.map((label, i) => <span key={i} className="mr-2 badge badge-secondary badge-info ">{label}</span>)}
    </td>
    <td className="">
      {message.subject}
      </td>

  </tr>
  );
}

const MessageList = ({ messages }) => {
  const createEntries = () => messages.map(message => <Message key={message.id} message={message} />);

  return <div>
    <table>
      <tbody>
        {createEntries()}
      </tbody>
    </table>
  </div>


}



const App = () => {

  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getMessages = () => {
    Axios.get('http://localhost:3000/messages/inbox.json').then(resp => {

      setMessages(resp.data.messages.map(message => {
        message.checked = false;
        return message;
      }) )
      setIsLoading(false);
    });
  }

  const checkMessages = (bool) => {
    setMessages(messages.map(message => {
      message.checked = bool;
      return message;
    }) )
  }

  useEffect(getMessages, []);

  // console.log(messages);

  if (isLoading) {
    return <div>is loading...</div>
  }


  return (
    <div className="container">
      <Header headline="Inbox" />
      <ButtonBar checkMessages={checkMessages}/>
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
