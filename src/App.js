import { useState } from 'react';

function App() {
  const [markdown, setMarkdown] = useState('## Markdown Preview');

  return (
    <main>
      <section className='markdown'>
        <textarea
          className='input'
          value={markdown}
          onChange={e => setMarkdown(e.target.value)}
        />
        <article className='result'>{markdown}</article>
      </section>
    </main>
  );
}

export default App;
