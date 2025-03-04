let number = prompt("Hãy nhập vào để kiểm tra có phải số đối xứng không");

if (!isNaN (number) && number.trim() !== "") {
    let num = Number(number);

    if (number < 0) {
        console.log("Số âm không phải số đối xứng");
        
    }else {
        let str = number.toString();
        let length = str.length;
        let isPalindrome = true;

        for (let i = 0; i < Math.floor(length / 2); i++){
            if (str[i] !== str[length - 1 - i]){
                isPalindrome = false;
                break;
            }
        }
        if(isPalindrome) {
            console.log("Là số đối xứng");
            
        }else {
            console.log("Không phải số đối xứng");
            
        }
    }
}else {
    console.log("Dữ liệu không hợp lệ");
    
}
