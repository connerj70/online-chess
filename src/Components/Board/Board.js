import React, { Component } from 'react'
import "./Board.css"
import Square from '../Square/Square';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squareArr: [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
            piecesArr: [{type: "Rook", location: 8}, {type: "Horse", location: 9}, {type:"Bishop", location: 10}, {type: "King"}, {type: "Queen"}, {type: "Bishop"}, {type: "Horse"}, {type: "Rook"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}, {type: "pawn"}],
            selected: null
        }
    }

    handleClick = (key) => {
        console.log(key)
        this.setState({
            selected: key
        }, ()=> console.log(this.state.selected))
    }


    render() {
        return (
            <div className="board-container">
                {this.state.squareArr.map((val, index) => {
                    if(val === 0) {
                        return <Square selected={this.state.selected == index ? true : false} key1={index} handleClick={this.handleClick} piece={this.state.piecesArr[index] ? this.state.piecesArr[index].type : null} key={index}/>
                    } else {
                        return <Square selected={this.state.selected == index ? true : false} key1={index} handleClick={this.handleClick} piece={this.state.piecesArr[index] ? this.state.piecesArr[index].type : null} key={index} brown={true} />
                    }
                })}
            </div>
        )
    }
}
