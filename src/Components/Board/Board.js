import React, { Component } from 'react'
import "./Board.css"
import Square from '../Square/Square';

export default class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            squareArr: [0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0],
            piecesArr: [{type: "Rook", location: 0}, {type: "Horse", location: 1}, {type:"Bishop", location: 2}, {type: "King", location: 3}, {type: "Queen", location: 4}, {type: "Bishop", location: 5}, {type: "Horse", location: 6}, {type: "Rook", location: 7}, {type: "pawn", location: 24}, {type: "pawn", location: 9}, {type: "pawn", location: 10}, {type: "pawn", location: 11}, {type: "pawn", location: 12}, {type: "pawn", location: 13}, {type: "pawn", location: 14}, {type: "pawn", location: 39}],
            selected: null
        }
    }

    handleClick = (key) => {
        for(let i=0; i < this.state.piecesArr.length; i++) {
            if(this.state.piecesArr[i].location == key) {
                this.setState({
                    selected: key
                })
                if(this.state.piecesArr[i].type == "Rook") {
                    this.handleRookMove(key);
                }
            }
        }
    }

    handleRookMove = (key) => {
        var possibleYMovesArr = []
        var currentLocation;
        for(let i=0; i < this.state.piecesArr.length; i++) {
            if(this.state.piecesArr[i].location == key) {
               currentLocation = this.state.piecesArr[i].location;
            }
        }
        if(currentLocation < 56) {
            for(var i=currentLocation + 8; i <= 56; i+=8) {
                possibleYMovesArr.push(i);
            }
            for(var j=0; j < this.state.piecesArr.length; j++) {
                if(possibleYMovesArr.includes(this.state.piecesArr[j].location)) {
                    console.log(j, 'needs to be removed')
                   possibleYMovesArr = possibleYMovesArr.slice(0, possibleYMovesArr.indexOf(this.state.piecesArr[j].location));
                }
            }
        }
        console.log("possible rook moves", possibleYMovesArr);
    }


    render() {
        return (
            <div className="board-container">
                {this.state.squareArr.map((val, index) => {
                    if(val === 0) {
                        return <Square selected={this.state.selected == index ? true : false} key1={index} handleClick={this.handleClick} piece={this.state.piecesArr.map((val)=> {return val.location === index ? val.type : null})} key={index}/>
                    } else {
                        return <Square selected={this.state.selected == index ? true : false} key1={index} handleClick={this.handleClick} piece={this.state.piecesArr.map((val)=> {return val.location === index ? val.type : null})} key={index} brown={true} />
                    }
                })}
            </div>
        )
    }
}
