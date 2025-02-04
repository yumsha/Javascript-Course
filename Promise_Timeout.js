// // timeout

// // setTimeout(function menyapa() {
// //     console.log('Halo');
// // }, 3000)

// // console.log('Dombrut');

// // ===============================

// // timeout sama promise

// // let makanan 

// // // function anterMakanan (){
// // //     console.log('Makanan lagi dimasak');


// // function anterMakanan (){
// //     console.log('Makanan lagi dimasak');

// //     return new Promise (function(resolve, reject) {
// //         setTimeout(function (){
// //             makanan = 'Nasi goreng'
// //             console.log(`${makanan} udah masuk`);
// //             resolve(makanan);
// //     }, 5000)
// //     })
// // }

// // function turu (){
// //     console.log('waktunya turu');
// // }

// // function UpdateStory (){
// //     console.log(`Update story dulu le, baru beli ${makanan}`);
    
// // }

// // anterMakanan()
// // turu()
// // UpdateStory(makanan)


// // // ini baru promise

// // function orderMenu (){
// //     return new Promise (function(resolve, reject) {
// //         resolve('Menu sudah diterima sistem')
// //         reject('Menu tidak diterima sistem')
// //     })
// // }
// // orderMenu. then((data) => (console.log(data)
// // ))


// // promise beda studi kasus

// let file

// function downloadFile (){
//     console.log('Downloading files...')
    
//     return new Promise (function(resolve, reject) {
//         setTimeout(function (){
//             file = 'koneksi.php'
//             console.log(`File ${file} berhasil di download!`);
//             // resolve(file);
//             reject('Download gagal, Cek Koneksi Internet Anda!')
//         }, 3000)
//     })
// }

// function bukaFile(iksan){
//     console.log(`Buka file ${iksan}. `)
    
// }

// downloadFile().then(bukaFile).catch(function (gagal) {
//     console.log(gagal)
    
// })

// // .then buat resolve, .catch buat reject

let chopper
let mesin
let warna

function rakitMesin(){
    console.log('Kamu memilih mesin SR400, mesinnya lagi di build!')

    return new Promise (function(resolve,reject){
        setTimeout(function (){
            mesin = 'SR400'
            console.log(`Mesin ${mesin} kamu udah berhasil dibangun!`)
            resolve(mesin)
            // reject('gagal')
        }, 5000)
    })
}

function pasangMesin(){
    console.log('mesin kamu sedang dipasang ke rangka..');
    
    return new Promise (function (resolve,reject){
        setTimeout(function(){
        console.log(`Mesin ${mesin} kamu sudah dipasang!`);
        resolve(mesin)
        }, 3000)
        })
    }


function catChopper(){
    console.log('Chopper kamu lagi di cat warnanya!')
    
    return new Promise (function (resolve,reject){
        setTimeout(function (){
            warna = 'Hitam'
            console.log(`Chopper kamu sudah dicat dengan warna ${warna}!`);
            resolve(warna)
        }, 3000)
    })
}


function rakitChopper(dombrut){
    console.log(`Chopper ${mesin} berhasil dibangun! cat dulu!`);
}

function gagalRakit(gagal){
    console.log('Mesinnya jebol! mekanik amatir!');
    
}


rakitMesin()
.then(pasangMesin)
.then(rakitChopper)
.then(catChopper)
.catch(gagalRakit)