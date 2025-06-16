import express from "express";
import { getEmployeeByID, getEmployees, addEmployee } from "#db/employees";

const router = express.Router();

export default router;

router.route("/employees/random").get((request, response) => {
  const employees = getEmployees(id);
  const randomIndex = Math.floor(Math.random() * employees.length);
  response.send(employees[randomIndex]);
});

router
  .route("/")
  .get((request, response) => {
    const employees = getEmployees();
    response.send(employees);
  })
  .post((request, response) => {
    if (!request.body)
      return response
        .status(400)
        .send("Request must have a body (employee name");
    const { name } = request.body;
    if (!name)
      return response.status(400).send("New employee must have a name");
    const newEmployee = addEmployee(name);
    response.status(201).send(newEmployee);
  });

router.route("/:id").get((request, response) => {
  const { id } = request.params;
  const employee = getEmployeeByID(+id);

  if (!employee) {
    return response.status(404).send("No employee with this ID");
  }
  response.send(employee);
});
