const input = document.querySelector('#inputOnly')
const button = document.querySelector('button')
const defualtbox = document.getElementsByClassName('defualtbox')
const back = document.querySelector('#back')
const chest = document.querySelector('#chest')
const biceps = document.querySelector("#biceps")
const triceps = document.querySelector("#triceps")
const quads = document.querySelector('#Quads')
const lats = document.querySelector('#lats')
const calf = document.querySelector('#calf')
const delts = document.querySelector('#delts')




const whichMuscle = () =>{
        switch (input.value){
            case 'back':
                back.style.display = 'inline';
                lats.style.display = 'inline'
                break;
            case 'chest':
                chest.style.display = 'inline';
                break;
            case 'biceps':
                biceps.style.display = 'inline'
                break;
            case 'triceps':
                triceps.style.display = 'inline'
                break;
            case 'quads':
                quads.style.display = 'inline'
                break;
            case 'lats':
            case 'back':
                lats.style.display = 'inline'
                break;
            case 'calf':
                calf.style.display = 'inline'
                break;
            case 'delts':
                delts.style.display = 'inline'
                break;

        }

    }

button.addEventListener('click',whichMuscle)
input.addEventListener('keypress',function ifstate(event){
    if (event.keyCode ===13){
        whichMuscle()
    }})

    

defualtbox[0].addEventListener('click',function(){
    back.style.display = 'inline'
    lats.style.display = 'inline'
})
defualtbox[1].addEventListener('click',function(){
    triceps.style.display = 'inline'
    biceps.style.display = 'inline'
})
defualtbox[2].addEventListener('click',function(){
    quads.style.display = 'inline'
})

defualtbox[3].addEventListener('click',function(){
    delts.style.display = 'inline'
})

defualtbox[4].addEventListener('click',function(){
    calf.style.display = 'inline'
})



const backbox = document.getElementById('backbox')
const armbox = document.getElementById('armbox')
const quadsbox = document.getElementById('quadsbox')
const deltbox = document.getElementById('deltbox')
const calfbox = document.getElementById('calfbox')


const allMuscles = [backbox , armbox , quadsbox , deltbox , calfbox]

///input.addEventListener('keyup', (e) => {
   /// let searchString = e.target.value
    ///let filterd =allMuscles.filter(box => {
    ///return(  box.getAttribute('value').includes(searchString)
    ///)})
    ///console.log(filterd);
    ///filterd[0].setAttribute('class','newbox') 
    
    
///})


//Steps to implement my search bar
//1. Listen to wether the user is typing something to the input bar, if it's true, sugion pop up.
//2. If the typing includes a specif muscle group, sugestion filters to what the user is typing.
//3. When the user clicks on the sugsion, it tirggers the anmiation screen.