

let info="";
for (let i = 100; i <= 999; i++) {


    for (let j = 2; j <= 10; j++) {
        if (i % j != 0 && j != 10) {
            continue;

        }
        else {
            if (j == 10) {
            
            console.log(i);   
            }
            else {
                break;
            }
        }



    }


} 
