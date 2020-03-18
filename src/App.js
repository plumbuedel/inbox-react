import React, { useEffect} from 'react';
import ButtonBar from './ButtonBar/ButtonBar';
import Header from './Header/Header';
import MessageList from './MessageList/MessageList';
import {connect} from 'react-redux';
import setIsLoading from './actions/isLoadingAction';
import setMessages from './actions/setMessagesAction';
import './App.css';
// import {getMessages} from './service/getMessages';
import getData from './actions/getDataAction';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    messages: state.messages
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setIsLoading: (bool) => dispatch(setIsLoading(bool)),
    setMessages: (messages) => dispatch(setMessages(messages)),
    getData: () => dispatch(getData())
  };
}

const App = (props) => {
  



  useEffect(props.getData, []);

  if (props.isLoading) {
    return <div>is loading...</div>
  }

  return (
    <div className="container">
      <Header headline="Inbox" />
      <ButtonBar/>
      <MessageList />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
