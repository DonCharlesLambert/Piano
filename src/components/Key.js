import React from 'react';
import SharpKey from './SharpKey';
import sounds from './Sound';

export default class Key extends React.Component{
    constructor(props) {
        super(props);
        let sound = sounds[this.props.note]
        this.audio = new Audio(sound)
        this.timeout = null;
    }


    state = {
        keyColor: "white"
    }

    style = {
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

    pressKey = () => {
        this.audio.play()
        this.setState({keyColor: "rgba(0, 0, 70, 0.2)"})
        this.timeout = setTimeout(this.releaseKey, 5000)
    }

    releaseKey = () => {
        this.setState({keyColor: "white"})
        this.audio.pause()
        this.audio.currentTime = 0
    }

    getKeyStyle = (keycolor) => {
        let main = {
            width: "5vw",
            height: "14rem",
            borderRadius: "1vw",
            backgroundColor: keycolor,
            borderColor: "black",
            borderWidth: "1px",
            margin: "0.5px",
            display: "flex",
        }
        return(main)
    }

    render(){
        return(
            <div style={this.getKeyStyle(this.state.keyColor)} onTouchStart={this.pressKey} onMouseDown={this.pressKey} onMouseUp={this.releaseKey}>
                <div style={this.style.text}>
                    <p>{this.props.note}</p>
                </div>
                {this.sharpKey()}
            </div>
        )
    }
}
