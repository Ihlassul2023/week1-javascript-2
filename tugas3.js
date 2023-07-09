const SeleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  if (nilaiAwal > nilaiAkhir) {
    return "Nilai akhir harus lebih besar dari nilai awal";
  } else if (dataArray.length < 5) {
    return "Jumlah angka dalam dataArray harus lebih dari 5";
  } else {
    hasil = dataArray.filter((data) => data >= nilaiAwal && data <= nilaiAkhir);
    return hasil.sort((a, b) => a - b);
  }
};

console.log(SeleksiNilai(15, 3, [2, 25, 4, 14, 17, 30, 8]));
