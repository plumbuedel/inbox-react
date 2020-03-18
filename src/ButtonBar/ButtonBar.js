import React, {useState} from 'react';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const labels = ['dev', 'personal', 'gschool'];

const ButtonBar = ({ messages, checkCallback, deleteCallback, readmarkCallback, setLabelCallback }) => {

    const checkForSelectedMessages = () => {
      const result = messages.reduce((acc, val) => {
        if (val.checked) {
          acc += 1;
        }
        return acc;
      }, 0);
      return result;
    }
  
    const [bulkCheck, setBulkCheck] = useState(false);
    const updateBulkCheck = () => {
      setBulkCheck(!bulkCheck);
      checkCallback(!bulkCheck);
    }
  
    const getBulkSelectIcon = () => {
      const value = checkForSelectedMessages();
      if (value === 0) {
        return faSquare;
      } else if (value === messages.length) {
        return faCheckSquare;
      } else {
        return faMinusSquare;
      }
    }
  
  
    const getOptions = (call) => {
      const result = labels.map((label, i) => <option key={i + 1} value={label}>{label}</option>)
      result.push(<option key={0} value={''}>{call}</option>);
      return result;
    }
  
    const setLabel = (action, value) => {
      setLabelCallback(action, value);
    }
  
  
  
    return (
      <div>
        <button
          onClick={() => updateBulkCheck()}>
          <FontAwesomeIcon icon={getBulkSelectIcon()} />
        </button>
        <button onClick={() => readmarkCallback(true)}
          disabled={!checkForSelectedMessages()}>Mark as Read
        </button>
        <button onClick={() => readmarkCallback(false)}
          disabled={!checkForSelectedMessages()}>Mark as Unread
        </button>
        <select
          defaultValue={''}
          disabled={!checkForSelectedMessages()}
          onChange={(event) => {
            setLabel('add', event.target.value);
            event.target.value = '';
          }}>
          {getOptions('Apply Label')}
        </select>
        <select
          defaultValue=''
          disabled={!checkForSelectedMessages()}
          onChange={(event) => {
            setLabel('remove', event.target.value);
            event.target.value = '';
          }}>
          {getOptions('Remove Label')}
        </select>
        <button onClick={() => deleteCallback()}><FontAwesomeIcon icon={faTrashAlt} /></button>
      </div>
    );
  }

  export default ButtonBar;