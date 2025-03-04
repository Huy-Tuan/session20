let str = prompt ("Nhập vào một chuỗi");
console.log(str);

let search = prompt ("Nhập từ muốn tìm");
console.log (search);

if (str.includes(search)){
    console.log("Có tồn tại");
    
}else {
    console.log("Không tồn tại");
    
}