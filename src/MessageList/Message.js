import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import setMessageSelected from '../actions/setMessageSelectedAction';

const Message = ({ message, messages, setSelectionOfMessage}) => {


    const [starred, setStarred] = useState(message.starred);
    
    const toggleCheckStatus = (message) => {
      setSelectionOfMessage(messages, message, !message.selected);
    }
    const toggleStarStatus = (message) => {
      message.starred = !message.starred;
      setStarred(!starred);
    }
  
    return (
      <tr className={message.selected ? "table-warning" : message.read ? "table-secondary" : ""}>
        <td>
          <input className="mr-2" type="checkbox" checked={message.selected} onChange={() => toggleCheckStatus(message)} />
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
  
  const mapDispatchToProps = dispatch => {
    return {
      setSelectionOfMessage: (messages, selectedMessage, bool) => dispatch(setMessageSelected(messages, selectedMessage, bool)),
    };
  }

  const mapStateToProps = state => {
    return {
      messages: state.messages
    };
  }



  export default connect(mapStateToProps, mapDispatchToProps)(Message);