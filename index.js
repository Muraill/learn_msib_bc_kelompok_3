//variabel merupakan tempat penampungan nilai yang dimana datanya dapat dirubah
//keyword yang biasa dipakai untuk mendefinisikan suatu variabel biasanya mengguanakan var ataupun let namun yang sering digunakan yaitu keyword let.
let namaDepan = 'Raihanda'
var namaBelakang = 'ilham'

console.log('Nama lengkap saya menggunakan nilai default variabelnya adalah', namaDepan, namaBelakang)//Nilai yang ditampilkan menggunakan nilai defaultnya

namaDepan = 'Muhammad Raihanda'//perubahan pada nilai default

console.log('Nama lengkap saya setelah memgubah nilai defaultnya adalah', namaDepan, namaBelakang)//Nama yang ditampilkan setelah mengubah nilai default

namaPanjang = namaDepan, namaBelakang 
console.log('Nama panjang saya adalah ', namaPanjang)



//Konstanta merupakan tempat penampungan nilai yang diamana datanya tidak dapat dirubah atau bersifat tetap
//keyword yang biasa digunakan untuk mendefinisikan konstanta adalah const

const umur = 21
console.log('umur saya saat ini adalah', umur)

//jika didefinisikan menggunakan data baru maka akan terjadi error
// umur = 17
// console.log('umur saya setelah dirubah adalah', umur)

//tipe data object & array
// Object adalah type data yang memiliki key dan dapat menampung berbagai type data di dalam satu waktu
// contoh type data object seperti dibawah ini.
let object1 = {
    key:'key',
    nomor: 1,
    object_ortu :{
        key:'key ortu',
        nomor_ortu:'nomor orang tua'
    }
}
console.log('Tampilkan objek :', object1)

//Array merupakan struktur data yang dapat menyimpan kumpulan data dengan type yang sama maupun berbeda-beda, index dari array selalu dimulai dari 0
//terdapat array satu dimensi maupun array multi dimensi
//contoh penerapan array satu dimensi sebagai berikut
let arrayku = [
    'A','B', '🍔', '🍟', '🍕', 6, 7, true, false, {"key": "value"}
]

console.log('Menampilkan Array Satu Dimensi : ', arrayku)

//contoh penerapan array multi dimensi sebagai berikut
let multiArray = [
    ['Pizza', '🍕'],
    ['kentang', '🍟'],
    ['roti', '🍞'],
    ['keju', '🧀']
]

console.log("Menampilkan Array Dimensi ke-1 : ", multiArray[0])
console.log("Menampilkan Array Dimensi ke-2 : ", multiArray[1])
console.log("Menampilkan Array Dimensi ke-3 : ", multiArray[2])
console.log("Menampilkan Array Dimensi ke-4 : ", multiArray[3])
console.log("Menampilkan Array Multi Dimensi : ", multiArray)





//if else condition digunakan untuk mencari suatu kondisi yang diinginkan.

// if(umur >= 18){
//     console.log('Saya Sudah Dewasa')
// }else{
//     console.log('Saya Masih Anak-anak')
// }

//else if condition
if(umur >= 60){
    console.log('Saya Sudah Tua')//Jika umur sudah atau lebih besar dari 60 maka termasuk sudah tua
}else if(umur >= 18){
    console.log('Saya Sudah Dewasa')//Jika umur sudah atau lebih besar dari 18 maka termasuk sudah dewasa
}else if(umur >= 12){
    console.log('Saya Sudah Remaja')//Jika umur sudah atau lebih besar dari 12 maka termasuk sudah remaja
}else{
    console.log('Saya Masih Anak-anak')//Jika umur lebih kecil dari 12 maka termasuk sudah dewasa
}


//switch case hampir sama dengan if else namun pengkondisiannya hanya menggunakan karakter dan integer.
hari = 2
switch(hari){
    case 1:
        console.log('Sekarang hari Senin')//Jika input hari = 1 maka hari senin
        break
    case 2:
        console.log('Sekarang hari Selasa')//Jika input hari = 2 maka hari selasa
        break
    case 3:
        console.log('Sekarang hari Rabu')//Jika input hari = 3 maka hari rabu
        break
    case 4:
        console.log('Sekarang hari Kamis')//Jika input hari = 4 maka hari kamis
        break
    case 5:
        console.log('Sekarang hari Jumat')//Jika input hari = 5 maka hari jumat
        break
    case 6:
        console.log('Sekarang hari Sabtu')//Jika input hari = 6 maka hari sabtu
        break
    case 7:
        console.log('Sekarang hari Minggu')//Jika input hari = 7 maka hari minggu
        break
    default:
        console.log('Hari yang anda masukan salah, silahkan coba lagi.')//Jika input hari lebih besar dari 7 maka salah pengisian hari.
}


