let h = 5;
for (let i = 1; i <= h; i++) {
  let str = " ";
  for (let j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}

for (let i = 1; i <= h; i++) {
    let str = " ";
    for (j = 1; j <= h - i; j++) {
      str += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
  