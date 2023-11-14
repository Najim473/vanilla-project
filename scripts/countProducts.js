import {message} from "./message.js";

export const sum =(x,y)=>{
    return x+y;
}
const sumOf = document.getElementById('sumOf');

sumOf.innerHTML = sum();