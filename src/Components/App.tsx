import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { ResetStyles } from "../GlobalStyles/Reset";
import { GlobalStyles } from "../GlobalStyles";
import theme from "../Theme";
import SaveUser from "./SaveUser/Form";
import ListUsers from "./ListUsers";

export type User = {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
};

function App() {
  const [users, setUsers] = useState<User[]>([])
  
  return (
    <ThemeProvider theme={theme}>
      <ResetStyles />
      <GlobalStyles />
      <SaveUser setUsers={setUsers} />
      <ListUsers users={users} />
    </ThemeProvider>
  );
}

export default App;
