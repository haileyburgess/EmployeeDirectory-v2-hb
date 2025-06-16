import express from "express";
const app = express();
export default app;
import employeesRouter from "./api/employees.js";
import { getEmployeeByID, getEmployees, addEmployee } from "#db/employees";

app.use(express.json());

app.use((request, response, next) => {
  console.log(`${request.method} ${request.originalUrl}`);
  next();
});

app.route("/").get((request, response) => {
  res.send("Hello employees!");
});

app.use("/employees", employeesRouter);

// Note: this middleware has to come first! Otherwise, Express will treat
// "random" as the argument to the `id` parameter of /employees/:id.
