import React from 'react';
import Key from './Key'
import SharpKey from './SharpKey'

export default class Piano extends React.Component{

    constructor() {
        super();
        this.keys = ["G", "A", "B", "C", "D", "E", "F", "G", "A", "B", "C", "D", "E", "F"]
    }

    style = {
        main:{
            width: "70vw",
            padding: "2%",
            backgroundColor: "pink",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "row"
        }
    }



    render(){
        return(
            <div style={this.style.main}>
                {this.keys.map(
                    (k, i) => {
                        let note = k;
                        if(note == "B" || note == "E" || i == this.keys.length - 1){
                            return (<Key note={note}/>)
                        }else{
                            return (<Key note={note} sharp={true}/>)
                        }
                    }
                )
                }
            </div>
        )
    }
}
