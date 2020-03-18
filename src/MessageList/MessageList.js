import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

const Message = ({ message, selectCallack }) => {


    const [starred, setStarred] = useState(message.starred);
    
    const toggleCheckStatus = (message) => {
      selectCallack(message, !message.checked);
    }
    const toggleStarStatus = (message) => {
      message.starred = !message.starred;
      setStarred(!starred);
    }
  
    return (
      <tr className={message.checked ? "table-warning" : message.read ? "table-secondary" : ""}>
        <td>
          <input className="mr-2" type="checkbox" checked={message.checked} onChange={() => toggleCheckStatus(message)} />
        </td>
        <td>
          <FontAwesomeIcon className="mr-2" icon={starred ? fullStar : emptyStar} onClick={() => toggleStarStatus(message)} />
        </td>
        <td className="mr-5">
          {message.labels.map((label, i) => <span key={i} className="mr-2 badge badge-secondary badge-info ">{label}</span>)}
        </td>
        <td className={message.read ? "font-weight-normal" : "font-weight-bold"}>
          {message.subject}
        </td>
  
      </tr>
    );
  }
  
  const MessageList = ({ messages, selectCallack }) => {
    const createEntries = () => messages.map(message => <Message key={message.id} message={message} selectCallack={selectCallack} />);
  
    return <div>
      <table>
        <tbody>
          {createEntries()}
        </tbody>
      </table>
    </div>
  }

  export default MessageList;
  