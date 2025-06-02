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

async function ExecutePromise() {
  try {
    await DeleteNumber();
    await DeleteNumber();
    await DeleteNumber();
    await DeleteNumber();
    await DeleteNumber();
    await DeleteNumber();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

ExecutePromise();

// Challenge.
/*
    Lakukan pemanggilan ke API berikut dengan menggunakan function promise yaitu fetch:
    https://jsonplaceholder.typicode.com/users

    Tampilkan hasil resolve datanya di console
*/

function FetchUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      // XML    : Tag HTML
      // JSON (Javascript Object Notation) : Javascript Object
      res.json().then((resJson) => {
        console.log(resJson);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}
// FetchUsers();

async function FetchUsers01() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');

    const responseJson = await response.json();
    console.log(responseJson);
  } catch (error) {
    console.log(error);
  }
}

FetchUsers01();
