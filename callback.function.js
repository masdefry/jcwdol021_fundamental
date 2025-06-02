// > CALLBACK FUNCTION
// Function yang dijadikan argument oleh function lain

// Case. Buatkan 2 buah function, dimana function 1 melakukan penjumlahan dan function yang ke-2 menampilkan hasil dari penjumlahan tsb
function Sum(num1, num2) {
  return num1 + num2;
}

function Output(result) {
  console.log(result);
}

let resultSum = Sum(10, 5); // 15
Output(resultSum);

// 1. Indirect Callback
// function CbSum(num1, num2, cb) {
//   // num1 = 10; num2 = 5; cb = CbOutput
//   cb(num1 + num2); // Output(10 + 5)
// }

// function CbOutput(result) {
//   console.log(result);
// }

// CbSum(10, 5, CbOutput);

// 2. Direct Callback
function CbSum(num1, num2, cb) {
  // num1 = 10; num2 = 5; cb = CbOutput
  cb(num1 + num2); // Output(10 + 5)
}

CbSum(10, 5, function (result) {
  console.log(result);
});

// Case. Menghapus data dari database, kemudian setelah itu menampilkan data terbarunya

const numbers = [1, 2, 3, 4, 5];

// function DeleteNumber() {
//   setTimeout(() => {
//     numbers.pop();
//   }, 5000);
// }

// function ShowNumber() {
//   setTimeout(() => {
//     console.log(numbers);
//   }, 3000);
// }

// DeleteNumber();
// ShowNumber();

function DeleteNumberCb(cb) {
  setTimeout(() => {
    numbers.pop();
    cb();
  }, 5000);
}

function ShowNumberCb() {
  setTimeout(() => {
    console.log(numbers);
  }, 3000);
}

DeleteNumberCb(function () {
  DeleteNumberCb(function () {
    ShowNumberCb;
  });
});
