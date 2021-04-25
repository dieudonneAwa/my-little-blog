import React from "react";
import { User } from "../App";
import { Button } from "../Commons/Button";
import Input from "../Commons/Input";
import { FormWrapper, StyledForm } from "./Styled";

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  user: User;
  isEdit: boolean;
};

const Form = ({ setUsers, user, setUser, setIsEdit, isEdit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUser((prevState: User) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (!isEdit) {
      setUsers((prevState: User[]) => [
        ...prevState,
        { id: prevState.push.length + 1, ...user },
      ]);
      setUser({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      });
    } else {
      setUsers((prevState: User[]) => {
        const updateUsers = prevState.map((u) => {
          if (u.id === user.id) {
            return { id: prevState.push.length + 1, ...user };
          }
          return u;
        });
        return updateUsers;
      });
      setUser({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
      });
      setIsEdit(false)
    }
  };

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
          type="text"
          placeholder="First Name"
          value={user.firstName}
          required
        />
        <Input
          onChange={handleChange}
          name="lastName"
          type="text"
          placeholder="Last Name"
          value={user.lastName}
          required
        />
        <Input
          onChange={handleChange}
          name="email"
          type="email"
          placeholder="Email Address"
          value={user.email}
          required
        />
        <Button onClick={handleSave} color="emerald" mt="1rem">
          Save User
        </Button>
      </StyledForm>
    </FormWrapper>
  );
};

export default Form;
