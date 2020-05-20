import React from 'react';
import SharpKey from './SharpKey';

export default class Key extends React.Component{

    style = {
        main:{
            width: "5vw",
            height: "14rem",
            backgroundColor: "white",
            borderRadius: "1vw",
            borderColor: "black",
            borderWidth: "1px",
            margin: "0.5px",
            display: "flex",
        },

        text:{
            position: "relative",
            top: "9rem",
            left: "2vw"
        }
    }

    sharpKey = () => {
        if(this.props.sharp){
            return(<SharpKey note={this.props.note + "#"}/>)
        }
    }

    render(){
        return(
            <div style={this.style.main}>
                <div style={this.style.text}>
                    <p>{this.props.note}</p>
                </div>
                {this.sharpKey()}
            </div>
        )
    }
}
