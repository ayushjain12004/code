const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

app.get("/is-prime", (req, res) => {
  const num = parseInt(req.query.number);

  if (isNaN(num)) {
    return res.status(400).json({ error: "Please provide a valid number." });
  }

  const result = isPrime(num);
  res.json({ number: num, isPrime: result });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
