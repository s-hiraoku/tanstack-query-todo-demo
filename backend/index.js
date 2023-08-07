const express = require("express");

const app = express();
const port = 3001;

const prisma = new PrismaClient();
app.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  return res.json(todos);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
