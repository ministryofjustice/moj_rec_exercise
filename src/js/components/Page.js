import React from 'react';
import AppBarExampleIcon from './AppBar'
import QuestionCard from './QuestionCard'


const styles = {
  page: {
    width: '100%',
  },
};

const Page = () => (
  <div style={styles.page}>
    <AppBarExampleIcon/>
    <QuestionCard/>
  </div>
);

export default Page;
