import { useState } from "react";

import { useHistory } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";

import SearchIcon from "@material-ui/icons/Search";

import { verifyUserExist } from "../services/github-api";

import "../styles/github-user-search.scss";

export function GithubUserSearch() {
  const history = useHistory();

  const [username, setUsername] = useState("");

  async function fetchUser(event) {
    event.preventDefault();

    if (username.trim() === "") {
      alert("Username cannot be empty.");
      return;
    }

    const userExist = await verifyUserExist(username);

    if (!userExist) {
      alert("Invalid username. Please insert correct username.");
      return;
    }

    history.push(`/profile/${username}`);
  }

  return (
    <div id="user-search-page">
      <form onSubmit={fetchUser}>
        <TextField
          placeholder="Type the username here..."
          variant="outlined"
          type="text"
          size="small"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></TextField>
        <Button variant="contained" color="primary" type="submit">
          <SearchIcon /> Buscar
        </Button>
      </form>
    </div>
  );
}
