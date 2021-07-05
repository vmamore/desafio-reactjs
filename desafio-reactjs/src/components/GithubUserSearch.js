import { useState } from "react"

import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';
import axios from 'axios';

import { useUser } from "../hooks/useUser";

export function GithubUserSearch() {
    const history = useHistory();
    const [username, setUsername] = useState('');
    const { setUser } = useUser();

    const url = `https://api.github.com/users/${username}`;

    async function fetchGithubProfileData(event) {
        event.preventDefault();

        if(username.trim() === '') {
            alert('Username cannot be empty.')
            return;
        }

        axios.get(url).then(userResponse => {
                var reposEndpoint = userResponse.data.repos_url;
                axios.get(reposEndpoint)
                    .then(repoResponse => {
                        setUser({
                            name: userResponse.data.name,
                            bio: userResponse.data.bio,
                            photo: userResponse.data.avatar_url,
                            username: userResponse.data.login,
                            location: userResponse.data.location,
                            followers: userResponse.data.followers,
                            following: userResponse.data.following,
                            organization: userResponse.data.company,
                            email: userResponse.data.email,
                            blog: userResponse.data.blog,
                            twitter: userResponse.data.twitter_username,
                            repos: repoResponse.data.map( repo => { 
                                return {
                                    url: repo.url,
                                    lastUpdate: repo.updated_at,
                                    start: repo.stargazers_count,
                                    name: repo.name,
                                    description: repo.description
                                } 
                            })
                        });
                        history.push('/profile');
                    })
            })
            .catch(() => alert('Error when trying to fetch user.'));  
    }

    return (
        <form onSubmit={fetchGithubProfileData}>
            <TextField
                placeholder="Type the username here..."
                variant="outlined"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                >
            </TextField>
            <Button variant="contained" color="primary" size="large" type="submit">
                Buscar
            </Button>
        </form>
    )
}