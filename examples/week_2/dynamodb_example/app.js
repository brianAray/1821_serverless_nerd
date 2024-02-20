const { getItem, createItem } = require("./EmployeeDAO");
const {
  queryEmployee,
  scanEmployeesByRole,
  queryEmployeesByRole,
} = require("./query_and_scan");

const uuid = require("uuid");

let key = {
  employee_id: "808047db-c08f-4a30-bcd0-53a5c54f5101",
  join_date: 1708442199,
};

// console.log(getItem(key));

async function createEmployee(name, email) {
  let employee_id = uuid.v4();
  let join_date = Math.floor(new Date().getTime() / 1000);

  let data = await createItem({ employee_id, join_date, name, email });
  console.log(data);
}

// queryEmployee(key.employee_id).then((item) => console.log(item));

// scanEmployeesByRole("Engineer").then((Items) => console.log(Items));

queryEmployeesByRole("Engineer").then((Items) => console.log(Items));

// createEmployee("Jane Smith", "jane@email.com");
