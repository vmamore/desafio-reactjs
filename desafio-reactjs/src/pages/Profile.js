import { useUser } from "../hooks/useUser";

import { RepositoryList } from "../components/RepositoryList";
import { UserInfo } from "../components/UserInfo";

import '../styles/profile.scss';

export function Profile() {
    const { user } = useUser();

    return (
        <div id="profile-page">
            <aside>
                <UserInfo user={user} />
            </aside>
            <main>
                <div className="main-content">
                    { user && user.repos && <RepositoryList repositories={user.repos} /> }
                </div>
            </main>  
        </div>
    )
}