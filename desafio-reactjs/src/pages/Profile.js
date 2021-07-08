import { useHistory } from "react-router-dom";

import { useUser } from "../hooks/useUser";
import { Button } from "@material-ui/core";

import { RepositoryList } from "../components/RepositoryList";
import { UserInfo } from "../components/UserInfo";

import '../styles/profile.scss';

export function Profile() {
    const { user } = useUser();
    const history = useHistory();
    
    function returnToHome() {
        history.push('/');
    }

    return (
        <div id="profile-page">
            <aside>
                <UserInfo user={user} />
                <Button variant="contained" color="default" size="large" onClick={returnToHome}>Voltar</Button>
            </aside>
            <main>
                <div className="main-content">
                    { user && user.repos && <RepositoryList repositories={user.repos} /> }
                </div>
            </main>  
        </div>
    )
}