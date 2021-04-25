import React, { useState } from "react";
import { User } from "../App";
import { Button } from "../Commons/Button";
import Input from "../Commons/Input";
import { FormWrapper, StyledForm } from "./Styled";

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
}

const Form = ({ setUsers }: Props) => {
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUser((prevState: User) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setUsers((prevState: User[]) => [...prevState, user])
  }

  return (
    <FormWrapper display="flex" flexDirection="column" alignItems="center">
      <h1>Simple React App</h1>
      <StyledForm
        width="600px"
        m="3rem auto"
        bg="white"
        p="3rem 3rem"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Input
          onChange={handleChange}
          name="firstName"
          placeholder="First Name"
        />
        <Input
          onChange={handleChange}
          name="lastName"
          placeholder="Last Name"
        />
        <Input
          onChange={handleChange}
          name="email"
          placeholder="Email Address"
        />
        <Button onClick={handleSave} color="emerald" mt="1rem">
          Save User
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
