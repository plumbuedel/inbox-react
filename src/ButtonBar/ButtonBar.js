import React from 'react';
import { faSquare, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrashAlt, faMinusSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import updateBulkSelect from '../actions/updateBulkSelectAction';
import deleteMessages from '../actions/deleteMessageAction';
import setReadMarkOn from '../actions/setReadMarkAction';
import changeLabelsOn from '../actions/changeLabelsAction';


const labels = ['dev', 'personal', 'gschool'];


const ButtonBar = ({ messages, bulkSelectStatus, updateSelection, deleteMsgs, setReadMarks, changeLabels }) => {

  const checkForSelectedMessages = () => {
    const result = messages.reduce((acc, val) => {
      if (val.selected) {
        acc += 1;
      }
      return acc;
    }, 0);
    return result;
  }

  const checkForReadMessages = () => {
    return messages.reduce((acc, val) => !val.read ? acc = acc + 1 : acc, 0);
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




  return (
    <div className="mb-2">
      <button
        className="btn btn-info mr-2"
        onClick={() => updateSelection(messages, bulkSelectStatus)}
      >
        <FontAwesomeIcon icon={getBulkSelectIcon()} />
      </button>
      <button
        className="btn btn-info mr-2"
        onClick={() => setReadMarks(messages, true)}
        disabled={!checkForSelectedMessages()}>Mark as Read
        </button>
      <button
        className="btn btn-info mr-2"
        onClick={() => setReadMarks(messages, false)}
        disabled={!checkForSelectedMessages()}>Mark as Unread
        </button>
      <select
        className="btn btn-info mr-2"
        defaultValue={''}
        disabled={!checkForSelectedMessages()}
        onChange={(event) => {
          changeLabels(messages, event.target.value, 'add');
          event.target.value = '';
        }}>
        {getOptions('Apply Label')}
      </select>
      <select
        className="btn btn-info mr-2"
        defaultValue=''
        disabled={!checkForSelectedMessages()}
        onChange={(event) => {
          changeLabels(messages, event.target.value, 'remove');
          event.target.value = '';
        }}>
        {getOptions('Remove Label')}
      </select>
      <button 
      className="btn btn-info mr-2"
      onClick={() => deleteMsgs(messages)}>
        <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      <div className=" float-right">
        <button
        className="btn btn-info mr-2">{checkForReadMessages()}
        </button>
        <span className="ml-1 font-weight-bold ">unread messages</span>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    messages: state.messages,
    bulkSelectStatus: state.bulkSelectStatus
  };
}


const mapDispatchToProps = dispatch => {
  return {
    updateSelection: (messages, bool) => dispatch(updateBulkSelect(messages, bool)),
    deleteMsgs: (messages) => dispatch(deleteMessages(messages)),
    setReadMarks: (messages, bool) => dispatch(setReadMarkOn(messages, bool)),
    changeLabels: (messages, label, action) => dispatch(changeLabelsOn(messages, label, action))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonBar);