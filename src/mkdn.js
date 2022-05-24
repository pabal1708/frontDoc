import React from 'react'
import ReactMarkdown from 'react-markdown'
import Markdown from 'markdown-to-jsx';


const markdown = `# Pomelo docs \n`

function mkdn( doc ) {
  return (
      <><h1>Tio Pol</h1><ReactMarkdown children={markdown} />
        <Markdown children={doc.doc}/>
      </>
  )
}

export default mkdn