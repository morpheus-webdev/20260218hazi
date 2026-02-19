## 2026.02.18. JS test feladat

0. Ha eddig nem tetted töltsd le a <a href="https://nodejs.org/en">nodejs-t</a>
1. Futtasd le a projektmappában az `npm i` parancsot.
2. Implementáld a következő függvényeket a math.js file-ban (math.test.js-t ne írd felül):

| Függvény              | Leírás                        | Bemenet               | Visszatérési érték    | Hibakezelés / Megkötések                                                   | Példa                   |
| --------------------- | ----------------------------- | --------------------- | --------------------- | -------------------------------------------------------------------------- | ----------------------- |
| **add(a, b)**         | Összeadás                     | két `number`          | `number` vagy `null`  | Nem szám bemenet → `null`                                                  | `add(2,3) → 5`          |
| **subtract(a, b)**    | Kivonás                       | két `number`          | `number` vagy `null`  | Nem szám bemenet → `null`                                                  | `subtract(10,4) → 6`    |
| **multiply(a, b)**    | Szorzás                       | két `number`          | `number` vagy `null`  | Nem szám bemenet → `null`                                                  | `multiply(3,4) → 12`    |
| **divide(a, b)**      | Osztás                        | két `number`          | `number` vagy `null`  | Ha `b === 0` → `null`<br>Nem szám bemenet → `null`                         | `divide(20,5) → 4`      |
| **sumArray(numbers)** | Tömb elemeinek összege        | `number tömb`         | `number` vagy `null`  | Ha nem tömb → `null`<br>Üres tömb → `0`<br>Nem szám elemek esetén → `null` | `sumArray([1,2,3]) → 6` |
| **average(numbers)**  | Tömb számainak átlaga         | `number tömb`         | `number` vagy `null`  | Üres tömb → `null`<br>Nem tömb → `null`                                    | `average([10,20]) → 15` |
| **max(numbers)**      | Legnagyobb érték kiválasztása | `number tömb`         | `number` vagy `null`  | Üres / nem tömb → `null`                                                   | `max([3,7,2]) → 7`      |
| **min(numbers)**      | Legkisebb érték kiválasztása  | `number tömb`         | `number` vagy `null`  | Üres / nem tömb → `null`                                                   | `min([3,7,2]) → 2`      |
| **isEven(number)**    | Eldönti, hogy a szám páros-e  | `number`              | `boolean` vagy `null` | Nem egész szám → `null`, Nem szám → `null`                                 | `isEven(4) → true`      |
| **factorial(n)**      | Faktoriális számítása (`n!`)  | nemnegatív egész szám | `number` vagy `null`  | Negatív szám → `null`<br>Nem egész szám → `null`<br>`0! = 1` kötelező      | `factorial(5) → 120`    |

3. Futtasd le az `npx jest` parancsot a teszteléshez