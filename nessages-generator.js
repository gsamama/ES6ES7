console.log('[')
for(let x=0;x<50;x++){
  console.log(`{
    "text" : "Message ${x}",
    "created" : ${Date.now() - parseInt(Math.random()*20000, 10)}` +
    `\n  },`);
}
console.log(']')