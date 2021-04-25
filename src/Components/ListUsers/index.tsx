import React from "react";
import { FC } from "react";
import styled from "styled-components";
import { User } from "../App";
import { Box } from "../Commons/Box";
import { Button } from "../Commons/Button";

const Table = styled.table`
  width: 100%;
  th,
  td {
    text-align: left;
    border: 1px dashed ${(p) => p.theme.colors.cultured};
    padding: 0.2rem 1rem;
  }
`;

type Props = {
  users: User[];
  setUser: React.Dispatch<React.SetStateAction<User>>;
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListUsers: FC<Props> = ({ users, setUser, setIsEdit }) => {
  const handleEdit = (user: User) => {
    setIsEdit(true);
    setUser(user);
  };

  return (
    <Box width="950px" p="1rem 2rem" bg="white" m="3rem auto">
      <Table>
        <thead>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email Address</th>
          <th>Action</th>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>
                <Button
                  onClick={() => handleEdit(user)}
                  py="0.3rem"
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default ListUsers;
