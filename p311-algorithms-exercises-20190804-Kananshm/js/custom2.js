let a=parseInt(prompt('a-ni daxil edin '));
let b=parseInt(prompt('b-ni daxil edin '));
let c=parseInt(prompt('c-ni daxil edin '));

if(a+b>c && a-b<c && a!=b && a!=c && b!=c){
    alert('bu ucbucaq muxtelif tereflidir!')
}
else if(a!=b && a!=c && b==c || a==b && b!=c && a!=c || a==c && a!=b && c!=b && a+b>c && a-b<c ){
    alert('bu uchbucaq beraberyanlidir!')
} else if (a==b && b==c && a==c ){
    alert('bu uchbucaq beraber tereflidir!')
}
else{
    alert('bele bir uchbucaq yoxdur!')
}