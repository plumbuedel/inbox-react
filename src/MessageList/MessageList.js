import React from 'react';
import { connect} from 'react-redux';
import Message from './Message';

  const mapStateToProps = state => {
    return {
      messages: state.messages
    };
  }
  
  const MessageList = ({ messages, selectCallack }) => {
    const createEntries = () => messages.map(message => <Message key={message.id} message={message} /*selectCallack={selectCallack}*/ />);
    return <div>
      <table>
        <tbody>
          {createEntries()}
        </tbody>
      </table>
    </div>
  }

  export default connect(mapStateToProps) (MessageList);
  