// JS

// Bài 1: Viết hàm chuyển đổi nhiệt độ từ độ C sang độ F
function convertTemp() {
    let input = document.getElementById("temp").value
    let tempC = document.getElementById("tempC").checked
    let tempF = document.getElementById("tempF").checked
    let res = document.getElementById("res")

    if (isNaN(input) == true) {
        res.innerHTML = "Bạn vừa nhập đầu vào không phải là số"
    } else if (input == "") {
        res.innerHTML = "Bạn chưa nhập đầu vào"
    } else if (tempC == true) {
        res.innerHTML = `C = ${input} &nbsp => &nbsp F = ${input * 1.8 + 32}`
    } else if (tempF == true) {
        res.innerHTML = `F = ${input} &nbsp => &nbsp C = ${(input - 32) / 1.8}`
    }
}

// viết hàm tìm ra số lớn thứ nhì trong mảng
function pushElement(){
    let arr = []
    let element = document.getElementById("number").value
    let res1 = document.getElementById("res1")

    arr.push(element)
    res1.innerHTML = arr
    console.log(arr)
}

function findSecondMax(arr) {
    let max = 0
    let secondMax = 0

    if(arr.length == 2){
        alert("Do dai mang phai lon hon 2")
    }else{
        for (let i = 0; i <= arr.length; i++) {
            if (max < arr[i]) {
                max = arr[i]
            }
        }
        
        for(let i = 0; i <= arr.length; i++){
            if(max == arr[i]){
                continue
            }else if(secondMax < arr[i]){
                secondMax = arr[i]
            }
        }
    }

    console.log(`Số lớn thứ hai là : ${secondMax}`)
}

function findMaxLength(arr){
    let strLength = 0
    let longestStr = ""

    for(let i = 0; i < arr.length; i++){
        if(strLength < arr[i].length){
            strLength = arr[i].length
            longestStr = arr[i]
        }
    }
    console.log(`Chuỗi có độ dài lớn nhất là : ${longestStr}`)
}

function checkLastChar(str,char){
    let lengthChar = char.length
    let letter = str.slice(-lengthChar)

    if(letter == char){
        return true
    }else{
        return false
    }
}

function checkArray(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                return true
            }else{
                return false
            }
            // console.log(arr[i])
        }
    }
}