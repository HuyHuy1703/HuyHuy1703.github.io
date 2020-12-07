// js

// Start
// Thay đổi chiều cao hình nền 
// để kín màn hình khi truy cập

// Lấy phần tử cần thay đổi
let bg = document.getElementsByClassName("banner-background")[0]


// Lấy các đoạn feed back của khách hàng
// Cắt chuỗi để gọn hơn
// Thêm dấu 3 chấm phía cuối đoạn văn
let feedback = document.getElementsByClassName("feedback")

// lấy chiều cao và chiều rộng màn hình hiện tại
let curent_width = window.innerWidth
let curent_height = window.innerHeight

// lấy chiều cao navbar
let nav = document.getElementsByTagName("nav")[0]
let data = window.getComputedStyle(nav)
let res_nav = data.getPropertyValue("height")

// cắt chuỗi lấy ra số
let height_nav = res_nav.slice(0, -2)

// Thay đổi chiều cao hình nền kín với màn hình (bao gồm navbar)
if (curent_width > 992) {
    bg.style.height = (curent_height - height_nav) + "px"
}

if (curent_width <= 992) {
    bg.style.height = (curent_height - height_nav) + "px"
}

// Chưa hoạt động như mong muốn
// if (curent_width >= 768 && curent_width < 1200) {
//     for (let i = 0; i < feedback.length; i++) {
//         let feed_data = feedback[i].innerText
//         let res = feed_data.substring(0, 70)
//         feedback[i].innerText = `${res} ...`
//     }
// } else if (curent_width <= 401) {
//     for (let i = 0; i < feedback.length; i++) {
//         let feed_data = feedback[i].innerText
//         let res = feed_data.substring(0, 120)
//         feedback[i].innerText = `${res} ...`
//     }
// } else if (curent_width >= 1200) {
//     for (let i = 0; i < feedback.length; i++) {
//         let feed_data = feedback[i].innerText
//         feedback[i].innerText = `${feed_data}`
//     }
// }

if (curent_width >= 1200) {
    for (let i = 0; i < feedback.length; i++) {
        feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.`
    }
}

if (curent_width >= 768 && curent_width < 1200) {
    for (let i = 0; i < feedback.length; i++) {
        feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...`
    }
}

if (curent_width < 414) {
    for (let i = 0; i < feedback.length; i++) {
        feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ...`
    }
}
// End

// Start
// Thay đổi chiều cao nền khi resize

window.addEventListener("resize", _resize)

function _resize() {
    // lấy chiều cao và chiều rộng màn hình hiện tại
    let curent_width = window.innerWidth
    let curent_height = window.innerHeight

    // lấy chiều cao navbar
    let nav = document.getElementsByTagName("nav")[0]
    let data = window.getComputedStyle(nav)
    let res_nav = data.getPropertyValue("height")

    // cắt chuỗi lấy ra số
    let height_nav = res_nav.slice(0, -2)

    // Thay đổi chiều cao hình nền kín với màn hình (bao gồm navbar)
    if (curent_width > 992) {
        bg.style.height = (curent_height - height_nav) + "px"
    } else if (curent_width <= 992) {
        bg.style.height = (curent_height - height_nav) + "px"
    }


    // Chưa hoạt động theo mong muốn

    // Cắt chuỗi để gọn hơn
    // Thêm dấu 3 chấm phía cuối đoạn văn
    // if (curent_width >= 1200) {
    //     for (let i = 0; i < feedback.length; i++) {
    //         let feed_data = feedback[i].innerText
    //         feedback[i].innerText = `${feed_data}`
    //     }
    // }else if (curent_width >= 768 && curent_width < 1200) {
    //     for (let i = 0; i < feedback.length; i++) {
    //         let feed_data = feedback[i].innerText
    //         let res = feed_data.substring(0, 70)
    //         feedback[i].innerText = `${res} ...`
    //     }
    // }else if (curent_width <= 401) {
    //     for (let i = 0; i < feedback.length; i++) {
    //         let feed_data = feedback[i].innerText
    //         let res = feed_data.substring(0, 100)
    //         feedback[i].innerText = `${res} ...`
    //     }
    // }

    if (curent_width >= 1200) {
        for (let i = 0; i < feedback.length; i++) {
            feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.`
        }
    }else if (curent_width >= 768 && curent_width < 1200) {
        for (let i = 0; i < feedback.length; i++) {
            feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque ...`
        }
    }else if (curent_width <= 401) {
        for (let i = 0; i < feedback.length; i++) {
            feedback[i].innerText = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium ...`
        }
    }

}
// End


// Slick Slider
$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1308,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
                autoplay: true
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
                autoplay: true
            }
        }
    ]
});