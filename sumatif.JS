document.getElementById("okBtn").onclick = function () {

   
    var nama = document.getElementById("name").value.trim();
    if (nama === "") {
        nama = "(Nama harus diisi)";
    }

   
    var kelas = document.getElementById("class").value.trim();
    if (kelas === "") {
        kelas = "(Class harus diisi)";
    }

   
    var ekstra = document.getElementsByName("Pilih Ekstrakulikuler");
    var hasilEkstra = "";

    for (var i = 0; i < ekstra.length; i++) {
        if (ekstra[i].checked) {
            hasilEkstra += ekstra[i].value + ", ";
        }
    }

    if (hasilEkstra === "") {
        hasilEkstra = "(Belum pilih ekstrakurikuler)";
    }

  
    var jadwalRadio = document.getElementsByName("Pilih Jadwal Belajar(wajib pilih salah satu)");
    var jadwal = "";

    for (var i = 0; i < jadwalRadio.length; i++) {
        if (jadwalRadio[i].checked) {
            jadwal = jadwalRadio[i].value;
            break;
        }
    }

    if (jadwal === "") {
        jadwal = "(Belum pilih jadwal)";
    }

   
    var hasil =
        "Nama: " + nama + "\n" +
        "Class: " + kelas + "\n" +
        "Ekstrakurikuler: " + hasilEkstra + "\n" +
        "Jadwal: " + jadwal;

    document.getElementById("hasil").innerText = hasil;
};


// tombol reset
document.getElementById("clearBtn").onclick = function () {
    location.reload();
};

