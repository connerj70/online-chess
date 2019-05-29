import React from 'react';
import "./Square.css";

class Square extends React.Component {
    constructor(props) {
        super(props);
    }

    classChecker = () => {
        var applicableClasses = "square"
        if(this.props.brown) {
            applicableClasses+= " brown"
        }
        if(this.props.selected) {
            applicableClasses += " selected"
        }
        return applicableClasses;
    }

    render() {
        return (
            <div onClick={(e) => this.props.handleClick(this.props.key1)} className={this.classChecker()}>
                {this.props.piece}
            </div>
        )
    }
}

export default Square;
