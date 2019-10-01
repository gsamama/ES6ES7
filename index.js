class Message {
  constructor(text = '', created = Date.now()){
    this.text = text;
    this._created = created;
  }
  get created() {
    return this.created;
  }
  set created(created){
    if(!created || isNaN(created)){
      throw new Error('Invalid Create Date');
    }
    this._created=created;
  }
  toString(){
    return `Message created at ${this._created} - text: ${this.text}`;
  }
}

class ImageMessage extends Message {
  constructor(text='', created = Date.now(), url = '', thumbnail = ''){
    super(text, created);
    this._url=url;
    this._thumbnail=thumbnail;
  }
  toString(){
    return `Photo : ${super.toString()}
Url: ${this._url}
Thumbnail: ${this._thumbnail}
********************************************************************************`
  }
}

var emptyMessage = new Message();
var textMessage = new Message('mensagem de ontem', Date.now() - 86400);
var photoMessage = new ImageMessage();



console.log(emptyMessage);
console.log(textMessage);

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(photoMessage));

console.log(emptyMessage instanceof Message);
console.log(textMessage instanceof Message);
console.log(photoMessage instanceof Message);
console.log(photoMessage instanceof ImageMessage);

console.log(emptyMessage instanceof ImageMessage);
console.log(textMessage instanceof ImageMessage);