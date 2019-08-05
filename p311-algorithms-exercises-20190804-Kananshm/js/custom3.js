let a=parseInt(prompt('a-ni daxil edin!' ));
let b=parseInt(prompt('b-ni daxil edin!'));
let info="";

if(a%2==0 &&  a%4==0 ){
    if(a%8!=0){
        info+='a eded yalniz 2-e ve 4-e bolunur!';
    
    }else{
        info+='a eded 2-e 4-e ve 8-e bolunur!';
    }   
      
}

info+=" ve ";

if(b%2==0 &&  b%4==0 ){
    if(b%8!=0){
        info+='b eded yalniz 2-e ve 4-e bolunur!';
    
    
    }else{
        info+='b eded 2-e 4-e ve 8-e bolunur!';

    }
}

alert(info);

