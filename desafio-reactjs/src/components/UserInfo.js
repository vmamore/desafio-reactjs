export function UserInfo(props) {
    return (
        <>
            <img src={props.user.photo} alt={props.user.name} />
                <h3>{props.user.name}</h3>
                <h3>{props.user.bio}</h3>
                <h3>{props.user.username}</h3>
                <h3>{props.user.location}</h3>
                <h3>{props.user.followers}</h3>
                <h3>{props.user.following}</h3>
                <h3>{props.user.organization}</h3>
                <h3>{props.user.email}</h3>
                <h3>{props.user.blog}</h3>
                <h3>{props.user.twitter}</h3>
        </>
    )
}