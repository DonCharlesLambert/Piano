import React from 'react';

export default class SharpKey extends React.Component{
    style = {
        main:{
            width: "5vw",
            height: "7rem",
            backgroundColor: "black",
            color: "white",
            borderRadius: "1vw",
            borderColor: "white",
            borderWidth: "1px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            left: "2.5vw",
        }
    }

    render(){
        return(
            <div style={this.style.main}>
                <p>{this.props.note}</p>
            </div>
    )
    }
}
