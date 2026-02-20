import { useState } from "react";
import { addEmployee } from "../services/employeeService";

interface Props {
  onAdded: () => void;
}

const AddEmployee = ({ onAdded }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addEmployee({
      name,
      email,
      department,
    });

    setName("");
    setEmail("");
    setDepartment("");

    onAdded();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddEmployee;
