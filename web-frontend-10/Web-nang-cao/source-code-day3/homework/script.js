// js

// Lấy thông tin màn hình 
let monitor = document.getElementById("monitor")

// Lấy giá trị theo từng nút bấm
function get_val(val){
    monitor.value += val
}

function _clear(){
    monitor.value = ""
}

function percent(){
    monitor.value = monitor.value / 100
}

function negative(){
    monitor.value += "-"
}

// Xóa 1 số cuối
function _del(){
    // Lấy giá trị hiện tại trên màn hình
    let curent_monitor = monitor.value
    // Lấy độ dài chuỗi hiện tại
    let len = curent_monitor.length
    // Thực hiện xóa ký tự cuối
    monitor.value = monitor.value.slice(0, len - 1)
}

function equal(){
    monitor.value = eval(monitor.value)
}