// function getLastElementMeta(array) {
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [lastElementIndex, lastElement];
// }

// console.log(getLastElementMeta(["apple", "peach", "pear"])); // повертає `[2, "pear"]
// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"])); // повертає `[3, "banana"]

// ============================================================================================================

// function getExtremeElements(array) {
//   const firstElementIndex = array[0];
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex];

//   return [firstElementIndex, lastElement];
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); //повертає [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); //повертає ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); //повертає ["apple", "banana"]

// ============================================================================================================

// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); // ["Mango", "Poly"]
// console.log(b); // ["Mango", "Poly"]

// a[1] = "Jacob";
// console.log(a); // ["Mango", "Jacob"]
// console.log(b); // ["Mango", "Jacob"]

// ============================================================================================================

// function calculateTotalPrice(order) {
//   let totalPrice = 0; // Ініціалізуємо змінну для суми
//   for (const item of order) {
//     // Проходимо по кожному числу в масиві
//     totalPrice += item; // Додаємо число до суми
//   }
//   return totalPrice; // Повертаємо загальну суму
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає `1116`
// console.log(calculateTotalPrice([164, 48, 291])); //повертає `503`
// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає `138`

// ============================================================================================================

// Функція calculateTax(amount, taxRate) оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
// taxRate - число, податкова ставка.Необов'язковий параметр.
// За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку -
//   результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1)); // повертає 10
// console.log(calculateTax(200, 0.1)); // повертає 20
// console.log(calculateTax(100, 0.2)); // повертає 20
// console.log(calculateTax(200, 0.2)); // повертає 40
// console.log(calculateTax(100, 0.3)); // повертає 30
// console.log(calculateTax(100)); // повертає 100

// ============================================================================================================

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);

// ============================================================================================================

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = []; // Масив для збереження ключів
// const values = []; // Масив для збереження значень

// for (let key in apartment) {
//   keys.push(key); // Додаємо ключ у масив keys
//   values.push(apartment[key]); // Додаємо значення у масив values
// }
// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153"]

// ============================================================================================================

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів властивостей об'єкта apartment,
// і додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив ["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив ["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// for (let key of keys) {
//   values.push(apartment[key]);
// }

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153"]

// ============================================================================================================

// function countProps(object) {
//   let propCount = 0;

//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// Рефакторинг функції (нижче)

// function countProps(object) {
//   return Object.keys(object).length;
// }

// console.log(countProps({})); // 0
// console.log({ name: "Mango", age: 2 }); // 2
// console.log({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3

// ============================================================================================================

// Функція countTotalSalary(salaries) приймає об'єкт зарплат (salaries) в якості параметра.
// Кожна властивість об'єкта salaries — це ключ, що містить ім'я співробітника, та значення - його відповідна зарплатня.

// Доповни код функції countTotalSalary(salaries) так, щоб вона повертала загальну суму зарплат всіх співробітників.

// Поради:

// Ініціалізуй змінну totalSalary зі значенням 0, яка буде відповідати за загальну суму зарплат усіх співробітників
// Використай метод Object.values() для отримання значень (зарплат) з об'єкта salaries
// Пройдись по отриманих значеннях за допомогою циклу та додай кожне значення до змінної totalSalary.
// Поверни totalSalary як результат
// Оголошена функція countTotalSalary(salaries)

// function countTotalSalary(salaries) {
//   let totalSalary = 0;

//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   return totalSalary;
// }

// console.log(countTotalSalary({})); // повертає 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // повертає 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // повертає 400

// ============================================================================================================

// Функція getProductPrice(productName) приймає
// один параметр productName - назва продукту.
// Функція містить масив об'єктів products
// з такими властивостями, як name — ім'я товару,
// price — ціна і quantity — кількість.

// Доповни код функції так, щоб вона шукала
// об'єкт продукту з певним ім'ям(властивість name) в масиві products і
// повертала його ціну(властивість price).
// Якщо продукт з такою назвою не знайдений,
// функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const item of products) {
//     if (item.name === productName) {
//       return item.price;
//     }
//   }
//   return null;
// }

// console.log(getProductPrice("Radar")); // 1300;
// console.log(getProductPrice("Grip")); // 1200;
// console.log(getProductPrice("Scanner")); // 2700;
// console.log(getProductPrice("Droid")); // 400;
// console.log(getProductPrice("Engine")); // null;

// ============================================================================================================

// Напиши функцію getAllPropValues(propName),
// яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив усіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []

function getAllPropValues(propName) {
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  const allPropValues = [];

  for (const product of products) {
    products.push(Object.values(products));
  }
}

console.log(getAllPropValues("name")); // повертає ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues("quantity")); // повертає [4, 3, 7, 9]
console.log(getAllPropValues("price")); // повертає [1300, 2700, 400, 1200]
console.log(getAllPropValues("category")); // повертає []
