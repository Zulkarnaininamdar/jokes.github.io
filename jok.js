const jokbtn = document.getElementById('btn');
const jok = document.querySelector('#jokes');
// GET https://icanhazdadjoke.com/
//Using  Promise 
// const JokeGenerator = () =>{
//     const SetHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }
// fetch("https://icanhazdadjoke.com/" , SetHeader ).then((res)=>  { return res.json()})
// .then((data) => {
//     jok.innerHTML = data.joke
// }).catch((error)=>{
//     console.log(error)
// })
// }


// jokbtn.addEventListener('click' , JokeGenerator)
// JokeGenerator()

const JokeGenerator = async () =>{
    const SetHeader = {
        headers : {
            Accept : "application/json"
        }
    }
    const res  =  await fetch('https://icanhazdadjoke.com/' , SetHeader)
    const data = await res.json()
    jok.innerHTML =  data.joke;
    
}
jokbtn.addEventListener('click' , JokeGenerator)
JokeGenerator();