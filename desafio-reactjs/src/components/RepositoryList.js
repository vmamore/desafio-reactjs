import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

export function RepositoryList(props) {
    return (
        <List>
            {props.repositories && props.repositories.map(repo => {
                return <Repository repo={repo} />
            })}
        </List>
    )
}

function Repository(props) {
    return (
        <>
            <ListItem key={props.repo.name}>
                {props.repo.name}
                {props.repo.url}
                {props.repo.stars}
                {props.repo.lastUpdate}
                {props.repo.description}
            </ListItem>
            <Divider />
        </>
    )
}

