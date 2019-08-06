let x=1;
let y=0;
z=0;

for(i=1100; i<=999; i++){
    if(i%25==0 && i%2!=0){

        y++;
        x=x*i;
        console.log(i)
    }
}
z=Math.round(Math.pow(x,1/y),3);
console.log(z);