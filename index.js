const Message = require('./message.model');

const fs = require('fs');
const path = require('path');


class MessageService {
  constructor(){
    const filePath = path.join(__dirname, 'messages.json');
    console.log(__dirname + __filename);
    let resolvePromise;
    let rejectPromise;
    this.messagesPromise = new Promise( (resolve, reject) => {
      resolvePromise  = resolve;
      rejectPromise = reject;
    });
    fs.readFile(filePath, {encoding: 'utf-8'}, (err, data) =>{
      //console.log(this);
      if(err){
        rejectPromise(err)
      }
      else {
        const dataArray = JSON.parse(data);
        const dataObj = dataArray.map( item => new Message(item.text, item.created));
        resolvePromise(dataObj);
      }

    });
  }

  get messages(){
    return this.messagesPromise;
  }

}

const messagesService = new MessageService();
messagesService.messages.then( (messages)=> {
  for(let x = 0 ; x < messages.length; x+=1){
    console.log(messages[x]);
  }

})
.catch( (err) =>{
console.error(err);
});