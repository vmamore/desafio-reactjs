import { useState } from "react"

import { useHistory } from 'react-router-dom';
import { Button, TextField } from '@material-ui/core';

import axios from 'axios';

import SearchIcon from '@material-ui/icons/Search';
import CachedIcon from '@material-ui/icons/Cached';

import { useUser } from "../hooks/useUser";

import '../styles/github-user-search.scss';

export function GithubUserSearch() {
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [isLoading, setLoading] = useState(false);

    const { setUser } = useUser();
    

    const url = `https://api.github.com/users/${username}`;

    function fetchGithubProfileData(event) {
        event.preventDefault();

        if(username.trim() === '') {
            alert('Username cannot be empty.')
            return;
        }

        setLoading(true);

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
                                    url: repo.html_url,
                                    lastUpdate: repo.updated_at,
                                    stars: repo.stargazers_count,
                                    name: repo.name,
                                    description: repo.description
                                } 
                            })
                        });
                        setLoading(false);
                        history.push('/profile');
                    })
            })
            .catch(() => {
                alert('Error when trying to fetch user.');
                setLoading(false);
                setUsername('');
            });  
    }

    return (
        <div id="user-search-page">
            <form onSubmit={fetchGithubProfileData}>
                <TextField
                    placeholder="Type the username here..."
                    variant="outlined"
                    type="text"
                    size="small"
                    value={username}
                    disabled={isLoading}
                    onChange={e => setUsername(e.target.value)}
                    >
                </TextField>
                { !isLoading ? 
                (
                <Button variant="contained" color="primary" type="submit">
                <SearchIcon /> Buscar
                </Button>)
                : (
                <Button variant="contained" color="primary" type="submit" disabled>
                <CachedIcon />
                </Button>)}
            </form>
        </div>
    )
}