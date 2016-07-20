import React from 'react';
import RadioGroup from 'react-radio-group';

class MultipleChoiceQuestionES6 extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      selectedValue: 'apple',
    };
  }

  handleChange(e) {
    this.setState({
      selectedValue: value,
    });
  }

  render() {
    return <div>
      <RadioGroup
        name="fruit"
        selectedValue={this.state.selectedValue}
        onChange={this.handleChange}>
        {Radio => (
          <div>
            <label>
              <Radio value="apple" />Apple
            </label>
            <label>
              <Radio value="orange" />Orange
            </label>
            <label>
              <Radio value="watermelon" />Watermelon
            </label>
          </div>
        )}
      </RadioGroup>
    </div>;
  }
}

let MultipleChoiceQuestion = React.createClass({
  getInitialState: function() {
    return {
      selectedValue: 'apple',
    };
  },

  handleChange: function(value) {
    this.setState({
      selectedValue: value,
    });
  },

  render: function() {
    return (
      <div>
        <RadioGroup
          name="fruit"
          selectedValue={this.state.selectedValue}
          onChange={this.handleChange}>
          {Radio => (
            <div>
              <label>
                <Radio value="apple" />Apple
              </label>
              <label>
                <Radio value="orange" />Orange
              </label>
              <label>
                <Radio value="watermelon" />Watermelon
              </label>
            </div>
          )}
        </RadioGroup>
      </div>
    );
  }
});

export default MultipleChoiceQuestionES6;
