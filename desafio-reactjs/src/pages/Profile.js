import { useUser } from "../hooks/useUser";

export function Profile() {
    const { user } = useUser();

    return (
        <div>
            <img src={user.photo} alt={user.name} />
            <h3>{user.name}</h3>
            <h3>{user.bio}</h3>
            <h3>{user.username}</h3>
            <h3>{user.location}</h3>
            <h3>{user.followers}</h3>
            <h3>{user.following}</h3>
            <h3>{user.organization}</h3>
            <h3>{user.email}</h3>
            <h3>{user.blog}</h3>
            <h3>{user.twitter}</h3>
            <ul>
                { user && user.repos && user.repos.map(repo => (
                    <li key={repo.name}>{repo.name}</li>
                ))}
            </ul>
        </div>
    )
}