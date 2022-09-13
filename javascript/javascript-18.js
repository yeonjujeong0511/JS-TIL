let textArray = ["피카츄","라이츄","파이리","꼬부기","버터풀","야도란","피죤투","또가스"];

function one(arr){
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i < arr.length; i++){
      console.log(arr[i]);
    }
  }
}
one(textArray);

const two = function(arr){
  if(typeof arr === "string" || Array.isArray(arr)){
    for(let i = 0; i <arr.length; i++){
      console.log(arr[i]);
    }
  }  
}
two(textArray);