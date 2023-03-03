import { useState } from "react";

export function CustomControlledForm() {
  const [formInputs, setFormInputs] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e, field) =>
    setFormInputs({ ...formInputs, [field]: e.target.value });

  return {
    username: formInputs.username,
    password: formInputs.password,
    handleInputChange,
  };
}