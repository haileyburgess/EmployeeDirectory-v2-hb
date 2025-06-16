const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

export function getEmployees() {
  return employees;
}

export function getEmployeeByID(id) {
  const numericId = +id;
  const employee = employees.find((employee) => employee.id === numericId);
  return employee || undefined;
}

export function addEmployee(name) {
  const newEmployee = {
    id: employees.length > 0 ? employees[employees.length - 1].id + 1 : 1,
    name: name,
  };
  employees.push(newEmployee);
  return newEmployee;
}
