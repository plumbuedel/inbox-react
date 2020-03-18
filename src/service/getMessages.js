import Axios from 'axios';

const apiPath = 'http://localhost:3000/messages/inbox.json';

export const getMessages = (setDataCallback) => {

Axios.get(apiPath).then(resp => {
     const result  = resp.data.messages.map(message => {
      message.selected = false;
      return message;
    });
    return result})
   .then(result  => setDataCallback(result))
   .catch(err => console.log(err));
}