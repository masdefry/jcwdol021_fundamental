// > PROMISE
// 1. Resolve   : Berhasil meng-eksekusi proses aync
// 2. Reject    : Gagal meng-eksekusi proses async

const numbers = [1, 2, 3, 4, 5];

function DeleteNumber() {
  return new Promise((resolve, reject) => {
    if (numbers.length > 0) {
      setTimeout(() => {
        numbers.pop();
        resolve('Delete Success');
      }, 2000);
    } else {
      reject('Delete Failed');
    }
  });
}

function ShowNumber() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numbers);
    }, 1000);
  });
}

DeleteNumber()
  .then(() => {
    return DeleteNumber();
  })
  .then(() => {
    return DeleteNumber();
  })
  .then(() => {
    return ShowNumber();
  })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });

// Async-Await
