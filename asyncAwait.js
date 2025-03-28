function fetchData(id) {
    console.log("Mengambil data...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {id: id, name: "Produk A", price: 10000};

            if(id > 0) {
                resolve(data);
            } else {
                reject("Error: ID harus lebih dari 0!");
            }
        
        }, 2000);
    });
}

async function getData() {
    try{
        const data = await fetchData(1);
        console.log("Data berhasil diambil:", data);
    } catch(error) {
        console.error("Terjadi kesalahan", error);
    }
}

getData();