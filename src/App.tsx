import React from 'react';
import './App.css';
import CodeEditor from './components/editor/code-editor';
import Preview from './components/preview';

function App() {
  return (
    <div className="App">
      <CodeEditor />
      <Preview />
    </div>
  );
}

export default App;
