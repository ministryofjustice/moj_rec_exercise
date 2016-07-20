import React from 'react';
import RadioButtonGroup from 'material-ui/RadioButton/RadioButtonGroup'
import RadioButton from 'material-ui/RadioButton/RadioButton'

class MultipleChoice extends React.Component {
// function MultipleChoice() {

  render() {

    return (

      <RadioButtonGroup name="blizzard-games">
        <RadioButton label="Warcraft 2" value="wc2"/>
        <RadioButton label="Warcraft 3" value="wc3"/>
        <RadioButton label="Starcraft 1" value="sc1"/>
        <RadioButton label="Starcraft 2" value="sc2"/>
      </RadioButtonGroup>
    )
  }
}

export default MultipleChoice
