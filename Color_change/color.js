//Generation of random color

const randomColor = function () {
  const hex = "0123456789ABCDEF"; // range of hexadecimal code
  let code = "#"; //every code starts with # and have 6 digits

  for (let i = 0; i < 6; i++) {
    code += hex[Math.floor(Math.random() * 16)];
  }
  // console.log(code);

  return code;
};
let eventId;
//function for changing color 
const startMagic = function(){
    //good practice 
   
    document.body.style.backgroundColor = randomColor();   

}

const magic = document.querySelector('#start');
magic.addEventListener('click',(e)=>{
    if(!eventId){
    eventId = setInterval(startMagic,1000);
    }
},false);

const stop = document.querySelector('#stop');
stop.addEventListener('click',(e)=>{
    clearInterval(eventId);
    eventId = null; // good practice to avoid the over write 
},false)