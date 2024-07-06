let arrSoNguyen = [];

function nhapSoNguyen() {
  let value = document.getElementById("txtSoNguyen").value * 1;
  console.log(value);
  arrSoNguyen.push(value);
  document.getElementById("txtSoNguyen").value = "";
  let content = hienThiMang();
  document.getElementById("txtArrSoNguyen").innerHTML = content;
}
console.log(typeof 10);
function hienThiMang(arr = arrSoNguyen) {
  let content = "";
  arr.forEach((item, index) => {
    content += `${item},`;
  });
  return content;
}

function demSoNguyenDuong(arr = arrSoNguyen) {
  let count = 0;
  arr.forEach((item, index) => {
    if (item > 0) {
      count++;
    }
  });
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Có ${count} số nguyên dương`;
}

function timSoNhoNhat(arr = arrSoNguyen) {
  let temp = 0;
  arr.forEach((item, index) => {
    if (item < temp) {
      temp = item;
    }
  });
  document.getElementById("txtKetQua").innerHTML = `Số ${temp} là số nhỏ nhất`;
}

function timSoDuongNhoNhat(arr = arrSoNguyen) {
  let temp = 1;
  arr.forEach((item, index) => {
    if (item < temp && item > 0) {
      temp = item;
    }
  });
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Số ${temp} là số dương nhỏ nhất`;
}

function timSoChanCuoiCung(arr = arrSoNguyen) {
  let temp = -1;
  arr.forEach((item, index) => {
    if (item % 2 == 0) {
      temp = item;
    }
  });
  if (temp != -1) {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Số ${temp} là số chẵn cuối cùng`;
  } else {
    document.getElementById("txtKetQua").innerHTML = `${temp}`;
  }
}

function doiViTri(arr = arrSoNguyen) {
  let viTri1 = document.getElementById("txtViTri1").value;
  let viTri2 = document.getElementById("txtViTri2").value;
  let temp = arr[viTri1];
  arr[viTri1] = arr[viTri2];
  arr[viTri2] = temp;
  let content = hienThiMang();
  document.getElementById("txtKetQua").innerHTML = content;
  document.getElementById("txtArrSoNguyen").innerHTML = content;
}

function sapXepTangDan(arr = arrSoNguyen) {
  let content = arr.sort((a, b) => a - b);
  document.getElementById("txtKetQua").innerHTML = content;
  console.log(arr);
}

function timSoNguyenToDauTien(arr = arrSoNguyen) {
  let temp = -1;
  for (let i = 0; i < arr.length; i++) {
    if (kiemTraSoNguyenTo(arr[i]) == 1) {
      temp = arr[i];
      //   console.log(arr[i]);
      break;
    }
  }
  document.getElementById("txtKetQua").innerHTML = `${temp}`;
}

function kiemTraSoNguyenTo(num) {
  if (num < 2) {
    return 0;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return 0;
    }
  }
  return 1;
}

function soSanhAmDuong(arr = arrSoNguyen) {
  let tongAm = 0;
  let tongDuong = 0;
  arr.forEach((item, index) => {
    if (item < 0) {
      tongAm++;
    } else {
      tongDuong++;
    }
  });
  if (tongDuong > tongAm) {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Tổng số dương là ${tongDuong} lớn hơn tổng số âm là ${tongAm}`;
  } else if (tongDuong < tongAm) {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Tổng số âm là ${tongAm} lớn hơn tổng số dương là ${tongDuong}`;
  } else {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Tổng số dương là ${tongDuong} bằng với tổng số âm là ${tongDuong}`;
  }
}

function demSoNguyen(arr = arrSoNguyen) {
  let count = 0;
  arr.forEach((item, index) => {
    if (Number.isInteger(item)) {
      count++;
    }
  });
  console.log(count);
  document.getElementById("txtKetQua").innerHTML = `Mảng có ${count} số nguyên`;
}
