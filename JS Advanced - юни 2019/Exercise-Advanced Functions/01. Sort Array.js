function solve(input,command) {
command==="asc"?input.sort((a,b)=>a-b):input.sort((a,b)=>b-a);
   return input;
}
solve([1,5,15,2],"asc");