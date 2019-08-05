let  a=parseInt(prompt('a ededin daxil edin:' ));
let  b=parseInt(prompt('b ededin daxil edin:' ));
let  c=parseInt(prompt('c ededin daxil edin:' ));
let info="";
if(a%3==0 && b%3==0 && c%3==0 && a%5==0 && b%5==0 && c%5==0 ) {
    info+=' bu ededler hem 3-e hem de 5-e bolunur'
}
else{
    info+=' bu ededler 3-e ve 5-e bolunmur!'
}
alert(info)