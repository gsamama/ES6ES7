var Message = require('./message.model');
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

module.exports=ImageMessage;