import { useState } from "react";

export const LoginCredentials = ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const [show, setShow] = useState(false);
  return (
    <table onClick={() => setShow(true)}>
      <thead>
        <tr>
            <th>Gebruikersnaam</th>
            <th>Wachtwoord</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{username}</td>
          <td role="button">{show ? password : "Klik om te tonen"}</td>
        </tr>
      </tbody>
    </table>
  );
};
