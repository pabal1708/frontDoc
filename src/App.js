
import { useState, useEffect } from 'react';
import './App.css';
import Markdown from './mkdn'

function App() {
  const [doc, setDoc] = useState("")

  useEffect(() => {
    import('./docs-content/src/docs/test.md')
      .then(res => {
        fetch(res.default)
        .then(res => res.text())
        .then(res => setDoc(res))
    })
    },)
  return (
    <div className="App">
      <header className="App-header">
        <Markdown doc={doc}/>
      </header>
    </div>
  );
}

export default App;
