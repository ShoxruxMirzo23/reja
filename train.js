//Task D
{
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  const sorted1 = arr1.sort().join("");
  const sorted2 = arr2.sort().join("");

  return sorted1 === sorted2;
}

console.log(checkContent("mitgroup", "gmtiprou"));
//Task C
/* class Shop {
  constructor(breadCount, lemonCount, colaCount) {
    this.products = {
      bread: breadCount,
      lemon: lemonCount,
      cola: colaCount,
    };
  }

  remaining() {
    console.log(`Remaining products at ${new Date().toLocaleTimeString()}:`);
    for (const [product, count] of Object.entries(this.products)) {
      console.log(`${count} ${product}s`);
    }
  }

  sell(product, quantity) {
    console.log(
      `Selling ${quantity} ${product}s at ${new Date().toLocaleTimeString()}`
    );
    if (this.products[product] >= quantity) {
      this.products[product] -= quantity;
    } else {
      console.log(`Not enough ${product}s available for sale.`);
    }
  }

  accept(product, quantity) {
    console.log(
      `Accepting ${quantity} ${product}s at ${new Date().toLocaleTimeString()}`
    );
    this.products[product] += quantity;
  }
}

const shop = new Shop(4, 5, 2);
shop.remaining();
shop.sell("bread", 3);
shop.accept("cola", 4);
shop.remaining();
/*
//TASK B
//const countDigits = (data) => {
//  let arr = [];
//  let changeArr = data.split("");
//  for (i = 0; i < changeArr.length; i++) {
//    if (!isNaN(changeArr[i])) {
//      arr.push(changeArr[i]);
//    }
//  }

//  return arr.length;
// };
// console.log(countDigits("ad2a54y79wet0sfgb9"));
//result = countDigits("ad2a54y79wet0sfgb9")
//print(result)  # 7 ni chiqaradi

//Task A
//function countLetter(letter, word) {
//  let count = 0;
//  for (let i = 0; i < word.length; i++) {
//    if (word[i] === letter) {
//      count++;
//    }
//  }
//  return count;
//}
//console.log(countLetter("e", "engineer")); // 3 ni qaytaradi

/*
console.log("Jack Ma maslahatlari");
const list = [
  "yahshi talaba boling", // 0-20
  "togri boshliq tanlang va koproq hato qiling", // 20-30
  "uzingizga ishlashingizni boshlang", // 30-40
  "siz kuchli bolgan narsalarni qiling", // 40-50
  "yoshlarga investitsiya qiling", // 50-60
  "endi dam oling, foydasi yoq endi", // 60
];

function maslahatbering(a, callback) {
  if (typeof a !== "number") callback("insert a number", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setTimeout(function () {
      callback(null, list[5]);
    }, 5000);
  }
}
console.log("passed here 0");
maslahatbering(65, (err, data) => {
  if (err) console.log("ERROR:", err);
  else {
    console.log("javob:", data);
  }
});
console.log("passed here 1");

// ASYNC function
// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new ERROR("insert a number");
//    else if (a <= 20) return list[0];
//    else if (a > 20 && a <= 30) return(list[1]);
//    else if (a > 30 && a <= 40) return(list[2]);
//    else if (a > 40 && a <= 50) return(list[3]);
//    else if (a > 50 && a <= 60) return(list[4]);
//    else {
//      return new Promise((resolve, reject) => {
//        setTimeout(() => {
//          resolve(list[5]);
//      }, 5000);
//   });
//  }
//}

// call via then/catch
//console.log("passed here 0");
//maslahatBering(65)
//  .then((data) => {
//    console.log("javob:", data);
//  })
//  .catch((err) => {
//    console.log("ERROR:", err);
//  });
//console.log("passed here 1");

// call via asyn/await
//async function run() {
//  let javob = await maslahatBering(25);
//  console.log(javob);
//  javob = await maslahatBering(70);
//  console.log(javob);
//  javob = await maslahatBering(41);
//  console.log(javob);
//}
//run();
*/
