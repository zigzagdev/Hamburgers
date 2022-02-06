import logo from '../logo.svg';
import React from "react";

const style = {
    backgroundColor:"black",
    position: "absolute",
    bottom: 0,
    width: "100%",
}

const chrct = {
    color: "white",
    textAlign: "right",
    paddingRight: "40px",
}



class Footer extends React.Component {
    render() {
        return (
            <div style={style}>
              <p style={chrct}>Matthew - Masa</p>
            </div>
        );
    }
}

export default Footer;