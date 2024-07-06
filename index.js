let arrSoNguyen = [];

document.getElementById("nhapSoNguyen").onsubmit = function (event) {
  event.preventDefault();
  let value = document.getElementById("txtSoNguyen").value;
  // console.log(value);
  if (value != "") {
    value = value * 1;
    if (Number.isInteger(value)) {
      arrSoNguyen.push(value);
      document.getElementById("txtSoNguyen").value = "";
      let content = hienThiMang();
      document.getElementById("txtArr").innerHTML = content;
    } else if (value == 0) {
      arrSoNguyen.push(value);
      document.getElementById("txtSoNguyen").value = "";
      let content = hienThiMang();
      document.getElementById("txtArr").innerHTML = content;
    } else {
      alert("Vui lòng nhập số nguyên!!");
    }
  } else {
    alert("Mảng đang rỗng");
  }
};

function nhapSoNguyen() {}

function hienThiMang(arr = arrSoNguyen) {
  let content = "";
  arr.forEach((item, index) => {
    content += `${item},`;
  });
  return content;
}

function demSoNguyenDuong(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let count = 0;
    arr.forEach((item, index) => {
      if (item > 0) {
        count++;
      }
    });
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Có ${count} số nguyên dương`;
  } else {
    alert("Mảng đang rỗng");
  }
}

function timSoNhoNhat(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let temp = 0;
    arr.forEach((item, index) => {
      if (item < temp) {
        temp = item;
      }
    });
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Số ${temp} là số nhỏ nhất`;
  } else {
    alert("Mảng đang rỗng");
  }
}

function timSoDuongNhoNhat(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let temp = 1;
    arr.forEach((item, index) => {
      if (item < temp && item > 0) {
        temp = item;
      }
    });
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Số ${temp} là số dương nhỏ nhất`;
  } else {
    alert("Mảng đang rỗng");
  }
}

function timSoChanCuoiCung(arr = arrSoNguyen) {
  if (arr.length != 0) {
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
  } else {
    alert("Mảng đang rỗng");
  }
}

function doiViTri(arr = arrSoNguyen) {
  let viTri1 = document.getElementById("txtViTri1").value * 1;
  let viTri2 = document.getElementById("txtViTri2").value * 1;
  console.log(viTri1);
  console.log(viTri2);
  console.log(arr.length);
  if (arr.length != 0) {
    if (Number.isInteger(viTri1) && Number.isInteger(viTri2)) {
      if (viTri1 >= 0 && viTri2 >= 0) {
        if (viTri1 < arr.length && viTri2 < arr.length) {
          let temp = arr[viTri1];
          arr[viTri1] = arr[viTri2];
          arr[viTri2] = temp;
          let content = hienThiMang();
          document.getElementById("txtKetQua").innerHTML = content;
          document.getElementById("txtArr").innerHTML = content;
        } else {
          alert("Vị trí không hợp lệ");
        }
      } else {
        alert("Vị trí phải là số dương");
      }
    } else {
      alert("Vị trí phải là số nguyên");
    }
  } else {
    alert("Mảng đang rỗng");
  }
}

function sapXepTangDan(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let content = arr.sort((a, b) => a - b);
    document.getElementById("txtKetQua").innerHTML = content;
    console.log(arr);
  } else {
    alert("Mảng đang rỗng");
  }
}

function timSoNguyenToDauTien(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let temp = -1;
    for (let i = 0; i < arr.length; i++) {
      if (kiemTraSoNguyenTo(arr[i]) == 1) {
        temp = arr[i];
        //   console.log(arr[i]);
        break;
      }
    }
    document.getElementById("txtKetQua").innerHTML = `${temp}`;
  } else {
    alert("Mảng đang rỗng");
  }
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
  if (arr.length != 0) {
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
  } else {
    alert("Mảng đang rỗng");
  }
}

function demSoNguyen(arr = arrSoNguyen) {
  if (arr.length != 0) {
    let count = 0;
    arr.forEach((item, index) => {
      if (Number.isInteger(item)) {
        count++;
      }
    });
    console.log(count);
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Mảng có ${count} số nguyên`;
  } else {
    alert("Mảng đang rỗng");
  }
}

function nhapSoThuc(arr = arrSoNguyen) {
  let value = document.getElementById("txtSoThuc").value;
  if (value != "") {
    arr.push(value);
    let content = hienThiMang();
    document.getElementById("txtArr").innerHTML = content;
    document.getElementById("txtSoThuc").value = "";
  } else {
    alert("Vui lòng nhập số thực");
  }
}
