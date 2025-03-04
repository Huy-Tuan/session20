let number = Number ( prompt ("Hãy nhập một số gần tính tổng từ 1 đến nó") );
let sum = 0;
if (number <= 0 || isNaN(number)){
    console.log("Không hợp lệ");
    
}else {
    for (let i = 1; i <= number; i++) {
    sum += i; 
    }

    console.log(sum);
}


