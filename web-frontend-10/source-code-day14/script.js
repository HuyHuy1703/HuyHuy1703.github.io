// JS


// 8. Giải phương trình bậc 2: ax^2 + bx + c = 0.


// 9. Vẽ hình chữ nhật rỗng kích thước m, n:

function hcn(m,n){
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(i == 1 || j == 1 || i == m || j == n){
                document.write("*")
            }
            else{
                document.write("&nbsp&nbsp")
            }
        }
        document.write("<br>")
    }
}

// 10.  Vẽ tam giác vuông chiều cao h:
function tamGiacVuong(h){
    for(let i = 1; i <= h; i++){
        for(let j = 1; j <= i; j++){
            document.write("*")
        }
        document.write("<br>")
    }
}

// 11. Vẽ tam giác cân ngược:
function tamGiacCanNguoc(h){
    for(let i = h; i >= 1; i--){
        for(let j = 1; j <= h - i; j++){
            document.write("&nbsp")
        }
        for(let k = 1; k <= i; k++){
            document.write("*")
        }
        document.write("<br>")
    }
}