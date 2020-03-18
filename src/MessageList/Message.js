import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar} from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar, faCircle, faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { connect } from 'react-redux';
import setMessageSelected from '../actions/setMessageSelectedAction';
import setStarOnMessage from '../actions/setStarOnMessageAction';

const Message = ({ message, messages, setSelectionOfMessage, setStar}) => {


    // const [starred, setStarred] = useState(message.starred);
    
    // const toggleCheckStatus = (message) => {
    //   setSelectionOfMessage(messages, message, !message.selected);
    // }
    // const toggleStarStatus = (message) => {
    //   message.starred = !message.starred;
    //   setStarred(!starred);
    // }
  
    return (
      <tr className={message.selected ? "table-info" : message.read ? "table-secondary" : ""}>
        <td>
        

           <FontAwesomeIcon 
           className="mr-2 hoverable zoom"
           onClick={() =>  setSelectionOfMessage(messages, message)} 
           icon={message.selected ? faCheckCircle : faCircle}
           />
     
        </td>
        <td>
          <FontAwesomeIcon 
          className="mr-2 hoverable zoom" 
          icon={message.starred ? fullStar : emptyStar} 
          onClick={() => setStar(messages, message)} />
        </td>
        <td className="mr-5">
          {message.labels.map((label, i) =><h5 key={i} className="d-inline"> <span  className="mr-2 badge badge-secondary badge-info ">{label}</span></h5>)}
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
      setStar: (messages, selectedMessage, bool) => dispatch(setStarOnMessage(messages, selectedMessage, bool))
    };
  }

  const mapStateToProps = state => {
    return {
      messages: state.messages
    };
  }



  export default connect(mapStateToProps, mapDispatchToProps)(Message);