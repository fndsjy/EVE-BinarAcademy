# Binar: EVE Challenge 04

- Mulai membuat roating dengan menggunakan Express JS
- Mulai mengubah file HTML menjadi file EJS sebagai View Engine

# `Binar` class

Class ini berisi 1 static method saja, yang berfungsi untuk mengambil data mobil dari internet.

```typescript
interface Car {
  id: string;
  plate: string;
  manufacture: string;
  model: string;
  image: string;
  rentPerDay: number;
  capacity: number;
  description: string;
  transmission: string;
  available: boolean;
  type: string;
  year: string;
  options: Array<string>;
  specs: Array<string>;
}

interface Binar {
  listCars(filterer: (car: Car) => boolean): Array<Car>
}
```

Method `listCars` ini akan menerima fungsi yang mana harus mengembalikan `boolean` sebagai nilainya. 
Fungsi ini akan dijalankan untuk masing-masing item di dalam list of cars, yang mana jika nilainya `true`,
maka akan ditampilkan di dalam list tersebut.

# Install dependencies di Terminal secara satu per satu
```typescript
1. npm install express --save
2. npm install ejs
3. npm i nodemon
```

# Cara menjalankan di Terminal
```typescript
nodemon start
```

# Tips

Just, hack it with team bro!
