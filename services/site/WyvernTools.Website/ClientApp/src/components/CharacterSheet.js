import React, { Component } from 'react';
import { CharacterSheetAttribute } from './CharacterSheetAttribute';

export class CharacterSheet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            attributes: {
                strength: 11,
                dexterity: 12,
                constitution: 7,
                intelligence: 15,
                wisdom: 3,
                charisma: 13
            }
        };
    }

    render() {
        return (
            <div className="character-sheet-attributes-container">
                <CharacterSheetAttribute name="Strength" value={this.state.attributes.strength} />
                <CharacterSheetAttribute name="Dexterity" value={this.state.attributes.dexterity} />
                <CharacterSheetAttribute name="Constitution" value={this.state.attributes.constitution} />
                <CharacterSheetAttribute name="Intelligence" value={this.state.attributes.intelligence} />
                <CharacterSheetAttribute name="Wisdom" value={this.state.attributes.wisdom} />
                <CharacterSheetAttribute name="Charisma" value={this.state.attributes.charisma} />
            </div>
        );
    }
}