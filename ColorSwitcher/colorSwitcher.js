const button = document.querySelectorAll('.button');
const body = document.querySelector('body')

button.forEach((but)=>{
    but.addEventListener('click', (e)=>{
        // console.log(e)
        // console.log(e.target)
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id;
        // }
        //  if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id;
        // }
        //  if(e.target.id === 'black'){
        //     body.style.backgroundColor = e.target.id;
        // }
        //  if(e.target.id === 'green'){
        //     body.style.backgroundColor = e.target.id;
        // }
        //  if(e.target.id === 'purple'){
        //     body.style.backgroundColor = e.target.id;
        // }
        //  if(e.target.id === 'red'){
        //     body.style.backgroundColor = e.target.id;
        // }

        //using Switch case 

        switch(e.target.id){
            case 'grey': {
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'yellow': {
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'black': {
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'green': {
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'purple': {
                body.style.backgroundColor = e.target.id;
                break;
            }
            case 'red': {
                body.style.backgroundColor = e.target.id;
                break;
            }

        }

    })
});

//change heading color on click 
const heading = document.getElementById('heading');
const innerButton = document.querySelector('#inner');
innerButton.addEventListener('click',(e)=>{
    // console.log(e)
    // console.log(e.target)
   heading.style.backgroundColor = 'orange';
   heading.style.fontSize = 'xx-large';
})
