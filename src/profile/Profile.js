import React from 'react';
import PropTypes from 'prop-types';


const Profile = props => {
    return (
    
        <div>
            <div>{props.children}</div>
            <a href="/" onClick={props.fullName}>Check Name</a>
            <h3>{props.bio}</h3>
            <h4>{props.profession}</h4>

        </div>
    )
}

Profile.defaultProps = {
    fullName: 'Anonyme',
    bio: 'There is no BIO',
    profession: 'Not found'
}


Profile.propTypes = {
    fullName: PropTypes.func,
    bio: PropTypes.string,
    profession: PropTypes.string

}

export default Profile
