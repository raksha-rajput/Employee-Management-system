import { useEffect, useState } from "react";
import {
  getEmployees,
  deleteEmployee,
} from "../services/employeeService";
import EditEmployee from "./EditEmployee";
import AddEmployee from "./AddEmployee";

function EmployeeList() {
  const [employees, setEmployees] = useState<any[]>([]);

  const loadEmployees = async () => {
    const data = await getEmployees();
    setEmployees(data);
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const handleDelete = async (id: number) => {
    await deleteEmployee(id);
    loadEmployees();
  };

  return (
    <div>
      <AddEmployee onAdded={loadEmployees} />

      <h2>Employees</h2>

      {employees.map((emp) => (
        <div key={emp.id} style={{ borderBottom: "1px solid #ccc" }}>
          <EditEmployee emp={emp} onUpdated={loadEmployees} />
          <button onClick={() => handleDelete(emp.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;
