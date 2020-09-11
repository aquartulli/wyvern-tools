import React, { Component } from 'react';

export class CharacterSheetAttribute extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            value: props.value
        };
    }

    render() {
        return (
            <div className="character-sheet-attribute-container">
                <div className="character-sheet-attribute-box">
                    <div className="character-sheet-attribute-name">{this.state.name}</div>
                    <div className="character-sheet-attribute-value">{this.state.value}</div>
                </div>
                <div className="character-sheet-modifier-box">{Math.floor((this.state.value - 10) / 2)}</div>
            </div>
        );
    }
}