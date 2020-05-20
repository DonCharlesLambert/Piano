import React from 'react';
import SharpKey from './SharpKey';

export default class Key extends React.Component{
    constructor(props) {
        super(props);
        const url = './sounds/' + this.props.note.toLowerCase() + "3 64.mp3"
        this.audio = new Audio()
        this.audio.src = url
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
        this.setState({keyColor: "rgba(0, 0, 70, 0.2)"})
        this.playSound()
    }

    releaseKey = () => {
        this.setState({keyColor: "white"})
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


    playSound = async () => {
        this.audio.play()
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
