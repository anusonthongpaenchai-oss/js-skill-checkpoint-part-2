const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
const result = students
                .filter((arr) => arr.score > 50)
                .map((arr) => arr.score * 1.1)
                .reduce((acc, cur) => acc + cur)
                .toFixed(1)

console.log(`Total score is ${result}`)
