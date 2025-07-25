import PropTypes from "prop-types";

function UserGreeting({ isLoggedIn = false, username = "Guest" }) {
    return isLoggedIn 
        ? <h1>Welcome {username}</h1> 
        : <h1>Please log in</h1>;
}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
};

export default UserGreeting;
