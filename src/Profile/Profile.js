import React from "react";
import PropTypes from "prop-types";
const Profile = (props) => {
    props.handleName(`My name is ${props.fullName}`)
    return(
    <div>
        {props.children}
        <h1>My name {props.fullName}</h1>
        <h3>I am a {props.profession}</h3>
      <p style={{fontstyle: "URW Chancery L, cursive"	}}> {props.bio}</p>

     
    </div>
)
}
Profile.defaultProps = {
    fullName: " Riadh Bakhti",
    profession: "Full Stack Developer",
    bio:"A Full Stack Developer  ",
  };
  
  Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string,
    bio: PropTypes.string,
    src: PropTypes.string,
  };
export default Profile
