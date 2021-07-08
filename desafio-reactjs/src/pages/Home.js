import { GithubUserSearch } from "../components/GithubUserSearch";
import Grid from '@material-ui/core/Grid';

export function Home() {
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
            <h1>Search Devs</h1>    
            <GithubUserSearch />
        </Grid>
    )
}
