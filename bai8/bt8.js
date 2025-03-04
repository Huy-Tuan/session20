let number = parseInt(prompt("Hãy nhập một số nguyên: "));
let count = 1;
if (isNaN(number) || number <= 0){
    console.log("Không hợp lệ");
    
}
else {
    let i = 0;
    while (count <= number){
        let isPrime = true;
        if (i < 2) {
            isPrime = false;
            
        }else if (i === 2) {
            isPrime = true;
        }else {
            for (let j = 2; j <= Math.sqrt(i); j++){
                if(i % j === 0){
                    isPrime = false; 
                    break;
                }
            }
        }
        if (isPrime) {
            console.log(i);
            count++;
        }  
        i++
    }
          
}
    
