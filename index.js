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
    this._created=created;
  }
  //toString method for class info
  toString(){
    return `Message created at ${this._created} - text: ${this.text}`;
  }
}
// Second class declaration extending base class Message
class ImageMessage extends Message {
  // calling constructor and super its params
  constructor(text='', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this._url=url;
    this._thumbnail=thumbnail;
  }
  // class info
  toString(){
    return `Photo : ${super.toString()}
Url: ${this._url}
Thumbnail: ${this._thumbnail}
********************************************************************************`
  }
}
// some outputs
var emptyMessage = new Message();
var textMessage = new Message('mensagem de ontem', Date.now() - 86400);
var photoMessage = new ImageMessage();
// raw output
console.log(emptyMessage);
console.log(textMessage);
// calling toString() method
console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));
// recognizing instance class
console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);
// test-case
console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);