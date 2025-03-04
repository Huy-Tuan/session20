let n = prompt ("Nhập một số");
let fn;
let fn0 = 0;
let fn1 = 1;

if(n < 0 || isNaN(n)){
    console.log("Không hợp lệ");
    
}else {
   console.log(fn0);
   console.log(fn1);
    for (let i  =  1; i < n; i++){ 
    
        fn = fn0 + fn1;

        fn0 = fn1;
        fn1 = fn;

        console.log(fn);
    } 
}

