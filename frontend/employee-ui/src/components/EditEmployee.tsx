import { useState } from "react";
import { updateEmployee } from "../services/employeeService";

const EditEmployee = ({ emp, onUpdated }: any) => {
  const [name, setName] = useState(emp.name);
  const [email, setEmail] = useState(emp.email);
  const [department, setDepartment] = useState(emp.department);

  const handleUpdate = async () => {
    await updateEmployee(emp.id, {
      id: emp.id,
      name,
      email,
      department,
    });
    onUpdated();
  };

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default EditEmployee;
