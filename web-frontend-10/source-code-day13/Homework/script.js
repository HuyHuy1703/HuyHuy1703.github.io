// js

// 1. Viết hàm kiểm tra 2 số, trả về số lớn hơn.
function checkNbr(nbr1, nbr2) {
    if (nbr1 > nbr2) {
        return nbr1
    } else if (nbr1 < nbr2) {
        return nbr2
    } else {
        return `Hai số bằng nhau`
    }
}

//2. Viết hàm tính n! (giai thừa) với n là số nguyên dương.
function tinhGiaiThua(n) {
    let giaiThua = 1;

    if (n < 0) {
        alert("Error")
    } else {
        for (let i = 1; i < n; i++) {
            giaiThua *= i
        }
        return giaiThua
    }
}

// 3. Viết hàm lấy ra một mảng các số chẵn từ mảng ban đầu và trả về mảng đã được sắp xếp giảm dần.
function sortEvenNumber(arr) {
    const newArr = arr.filter(evenNbr => evenNbr % 2 == 0).reverse()
    return newArr
}

// 4. Viết hàm lấy ra ngày tháng năm hiện tại, xác định đang là mùa nào trong năm. Biết rằng:
// - Mùa xuân từ tháng 1 đến tháng 3
// - Mùa hè từ tháng 4 đến tháng 6
// - Mùa thu từ tháng 7 đến tháng 9
// - Mùa đông từ tháng 10 đến tháng 12
function checkSeason() {
    switch (new Date().getMonth()) {
        case 0:
        case 1:
        case 2:
            season = "Spring"
            break
        case 3:
        case 4:
        case 5:
            season = "Summer"
        case 6:
        case 7:
        case 8:
            season = "Autumn"
        case 9:
        case 10:
        case 11:
            season = "Winter"
    }
    return season
}
