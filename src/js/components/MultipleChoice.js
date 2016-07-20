import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};

const MultipleChoiceQuestion = () => (
  <div>
    <RadioButtonGroup name="multipleChoice" defaultSelected="not_light">
      <RadioButton
        value="a1"
        label="Answer 1"
        style={styles.radioButton}
      />
      <RadioButton
        value="a2"
        label="Answer 2"
        style={styles.radioButton}
      />
      <RadioButton
        value="a3"
        label="Answer 3"
        style={styles.radioButton}
      />
      <RadioButton
        value="a4"
        label="Answer 4"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default MultipleChoiceQuestion;
