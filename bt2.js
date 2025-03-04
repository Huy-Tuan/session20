let number = Number(prompt("Hãy nhập một số để kiểm tra xem trong khoảng 1 đến số đó có chia hết cho 5 không"));
if (number <= 0 || isNaN(number)) {
    console.log("Dữ liệu không hợp lệ");
    
}else {
    for(let i = 1 ; i <= number; i++){
        if(i % 5 == 0){
            console.log("Số chia hết cho 5 là: " +i);
            
        }
    }
}