function prosesData(angka) {
    console.log("Memproses data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof angka !== "number") {
                reject("Error: Input harus number!");
            } else {
                let hasil = angka * 2;
                console.log("Proses selesai.");
                resolve(hasil);
            }
        }, 2000);
    });
}

prosesData()
    .then((hasil) => {
        console.log("Hasil akhir:", hasil);
    })
    .catch((error) => {
        console.error(error);
    });
