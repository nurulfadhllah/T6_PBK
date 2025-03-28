function prosesData(angka, callback) {
    console.log("Proses data...");

    setTimeout(() => {
        let hasil = angka * 2;
        console.log("Proses selesai!");
        callback(hasil);
    }, 2000);
}

function tampilkanHasil(hasil) {
    console.log("Hasil akhir:", hasil);
}

prosesData(5, tampilkanHasil);
