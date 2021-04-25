import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ResetStyles } from "../GlobalStyles/Reset";
import { GlobalStyles } from "../GlobalStyles";
import theme from "../Theme";
import SaveUser from "./SaveUser/Form";
import ListUsers from "./ListUsers";

export type User = {
  id?: number | string;
  firstName: string;
  lastName: string;
  email: string;
};

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <SaveUser
        setIsEdit={setIsEdit}
        isEdit={isEdit}
        setUser={setUser}
        user={user}
        setUsers={setUsers}
      />
      <ListUsers setIsEdit={setIsEdit} setUser={setUser} users={users} />
    </ThemeProvider>
  );
}

export default App;
