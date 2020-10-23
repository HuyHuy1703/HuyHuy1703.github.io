// js

document.write(`<h2>1. Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F và ngược lại</h2>`)
document.write(`<p>Cách sử dụng :<br>Chuyển đổi từ °C sang độ °F dùng hàm <b>" c_toF() "</b></p>`)
document.write(`<p>Cách sử dụng :<br>Chuyển đổi từ °C sang độ °F dùng hàm <b>" f_toC() "</b></p>`)

document.write(`<h2>2. Viết hàm tính thế kỷ của 1 năm</h2>`)
document.write(`<p>Cách sử dụng :<br>Dùng hàm <b>" centFromYenbrr() "</b></p>`)

document.write(`<h2>3. </h2>`)
document.write(`<p>Cách sử dụng :<br>Dùng hàm <b>" centFromYenbrr() "</b></p>`)

document.write(`<h2></h2>`)
document.write(`<p>Cách sử dụng :<br>Dùng hàm <b>" centFromYenbrr() "</b></p>`)



// Hàm chuyển đổi từ độ C sang độ F
function c_toF(nbr){
    console.log(`C = ${nbr} => F = ${nbr * 1.8 + 32}`)
}
// Hàm chuyển đổi từ độ F sang độ C
function f_toC(nbr){
    console.log(`F = ${nbr} => C = ${(nbr - 32) / 1.8}`)
}

// Hàm tính thế kỷ
function centFromYenbrr(nbr){
    console.log(`Yenbrr = ${nbr} => Century = ${Math.ceil(nbr/100)}`)
}

// Hàm cắt chuỗi
function cutString(str){
    console.log(`String = ${str}\nString Cutted = ${str.slice(0,10)}...`)
}

// Hàm viết hoa chữ đầu tiền
function upperStr(str){
    let lowerStr = str.toLowerCase();
    let letter = str.slice(0,1)
    console.log(`${letter.toUpperCase() + lowerStr.substr(1)}`)
}