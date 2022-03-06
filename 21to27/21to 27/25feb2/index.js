let string1 = prompt("Enter first string").toLowerCase();
let string2 = prompt("Enter Second string").toLowerCase();

function isAnagram(string1, string2) {
  let a = string1.split("");
  let b = string2.split("");

  if (a.length != b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] > a[j]) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (b[i] > b[j]) {
        let temp = b[i];
        b[i] = b[j];
        b[j] = temp;
      }
    }
  }

  console.log(a);
  console.log(b);

  for (let i = 0; i < a.length; i++) {
    if (a[i] == b[i]) {
      return true;
    } else {
      return false;
    }
  }
}

alert(isAnagram(string1, string2));
© 2022 GitHub, Inc.
Terms
Pri