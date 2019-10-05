import Message from './model/message.model';

console.log('index started');
console.log(new Message());

/* eslint no-undef: 0 */
document.getElementById('send').onclick=()=>{
  const m = new Message(document.getElementById('message').value);
  document.getElementById('messages').innerHTML += 
  `<li>${new Date(m._created).toString()} - ${m.text}</li>`;
  document.getElementById('message').value='';
  document.getElementById('message').focus();
}

if(module && module.hot){
  module.hot.accept();
}