import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "@material-ui/core";

import { RepositoryList } from "../components/RepositoryList";
import { UserInfo } from "../components/UserInfo";
import { fetchGithubProfileData } from "../services/github-api";

import "../styles/profile.scss";

export function Profile(props) {
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchGithubProfileData(props.match.params.username).then((user) => {
      setUser(user);
    });
  }, [props.match.params.username]);

  function returnToHome() {
    history.push("/");
  }

  return (
    <div id="profile-page">
      {user ? (
        <>
          <aside>
            <UserInfo user={user} />
            <Button
              variant="contained"
              color="default"
              size="large"
              onClick={returnToHome}
            >
              Voltar
            </Button>
          </aside>
          <main>
            <div className="main-content">
              {user && user.repos && (
                <RepositoryList repositories={user.repos} />
              )}
            </div>
          </main>
        </>
      ) : null}
    </div>
  );
}
