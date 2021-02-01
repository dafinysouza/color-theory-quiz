/* eslint-disable react/prop-types */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeadTag from '../../src/components/HeadTag';
import QuizScreen from '../../src/screens/Quiz';
import db from '../../db.json';

export default function QuizDaGaleraPage() {
  return (
    <ThemeProvider theme={db.theme}>
      <HeadTag
        title="Quiz: Teoria das cores"
        description="Teste os seus conhecimentos sobre teoria das cores no mundo da web!"
      />
      <QuizScreen
        externalQuestions={db.questions}
        externalBg={db.bg}
      />
    </ThemeProvider>
  );
}
