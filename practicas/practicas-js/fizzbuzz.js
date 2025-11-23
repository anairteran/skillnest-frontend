//logica del fizzbuzz
// var fizz="Fizz";
// var buzz="Buzz";
// var x=30;

// if(x % 3==0 && x%5==0){
//   console.log(fizz+buzz);
// }else if(x%5==0){
//   console.log(buzz);
// }else if (x%3==0){
//   console.log(fizz);
// }else{
//   console.log(x)
// }

// Logica del fizzbuzz + recorrido del 1 al 100
var fizz="Fizz";
var buzz="Buzz";

for(var i=0; i<100; i++)
{
  if(i % 3==0 && i%5==0){
  console.log(fizz+buzz);
    }else if(i%5==0){
      console.log(buzz);
    }else if (i%3==0){
      console.log(fizz);
    }else{
      console.log(i)
    }

}