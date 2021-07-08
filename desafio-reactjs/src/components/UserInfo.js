import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import LanguageIcon from '@material-ui/icons/Language';
import TwitterIcon from '@material-ui/icons/Twitter';

import StarIcon from '@material-ui/icons/Star';
import PeopleIcon from '@material-ui/icons/People';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import '../styles/user-info.scss'

export function UserInfo(props) {
    return (
        <>
                <img src={props.user.photo} alt={props.user.name} />
                <h2 className="user-info-name">{props.user.name}</h2>
                <h3>@{props.user.username}</h3>
                <p>{props.user.bio}</p>
                
                <div className="user-info-stats">
                    <p><PeopleIcon /> {props.user.followers} followers</p>
                    <p><FavoriteBorderIcon /> {props.user.following} following</p>
                    <p><StarIcon /> 100 stars</p>
                </div>

                <ul className="user-info">
                    <li><BusinessIcon /> {props.user.organization}</li>
                    <li><LocationOnIcon /> {props.user.location}</li>
                    { props.user.email && <li><EmailIcon /> {props.user.email}</li> }
                    <li><LanguageIcon /> {props.user.blog}</li>
                    <li><TwitterIcon /> {props.user.twitter}</li>
                </ul>
        </>
    )
}