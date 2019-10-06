// declaring class Message
class Message {
  // creating constructor class for params entry
  constructor(text = '', created = Date.now()){
    this.text = text;
    this._created = created;
  }
  // getter
  get created() {
    return this.created;
  }
  // and setter
  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Invalid Create Date');
    }
    if(Message.prototype.call(this, '_created')){
      throw new Error('Created already exists')
    }
    this._created=created;
  }
  //toString method for class info
  toString(){
    return `Message created at ${this._created} - text: ${this.text}`;
  }
}

module.exports = Message;