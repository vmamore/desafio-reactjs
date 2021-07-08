import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';

import StarIcon from '@material-ui/icons/Star';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export function RepositoryList(props) {
    return (
        <List>
            {props.repositories && props.repositories.map(repo => {
                return <Repository repo={repo} key={repo.name} />
            })}
        </List>
    )
}

function Repository(props) {
    const differenceInTime = new Date().getTime() - new Date(props.repo.lastUpdate).getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return (
        <React.Fragment key={props.name}>
            <ListItem>
            <div>
                <a style={{fontSize:'26px'}} href={props.repo.url} target="_blank">
                    {props.repo.name}
                </a>
                <p>
                    {props.repo.description}
                </p>
                    <p><StarIcon /> {props.repo.stars} <FiberManualRecordIcon /> Updated {parseInt(differenceInDays)} day(s) ago</p>
            </div>
            </ListItem>
            <Divider />
        </React.Fragment>
    )
}

