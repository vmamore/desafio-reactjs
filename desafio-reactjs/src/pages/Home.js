import { GithubUserSearch } from "../components/GithubUserSearch";
import '../styles/home.scss';

export function Home() {
    return (
        <div id="home-page">
            <main>
            <h1>Search Devs</h1>    
            <GithubUserSearch />
        </main>
        </div>
    )
}