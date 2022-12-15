import "./App.css";
import "highlight.js/styles/base16/dracula.css";
import hljs from "highlight.js";

import { useState, useEffect } from "react";
import { marked } from "marked";

const defaultText =
  "# Welcome to my React Markdown Previewer!\n\n## Markdown allows you to create sophisticated formating for prose or code...\n### By using simple syntax - the #'s create heading levels\n\nYou can mark out code inline, `<div>Like this</div>`, by placing it between 2 backticks.\n\n```\n// or on multi-line:\n\nfunction makeCodeBox(before, after) {\n  if (before == '```' && after == '```') {\n    return multiLineCode;\n  }\n}\n```\n\n- There are lists as well.\n- Made using the '-' symbol.\n    - And using indentation you can nest them as well.\n    - These are 'unordered' bulleted lists.\n\n\n1. And these are 'ordered' numbered/lettered lists.\n2. You can format text as well.\n  i. You can go **bold**\n  ii. Or _italic_\n  iii. Or **_both!_**\n  iv.  Or even ~~crossing stuff out~~.\n\n> You can make your text stand out by using a block quote!\n\nThere are also links:\n[For more information about GitHub Flavored Markdown](https://github.github.com/gfm/#what-is-github-flavored-markdown-)\n\nPsst, you can also add images:\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)";
function App() {
  const [text, setText] = useState(defaultText);
  const markdown = marked(text, {
    breaks: true,
    gfm: true,
  });

  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <div className="App">
      <h1 data-text="Markdown Previewer">Markdown Previewer</h1>

      <main className="main">
        <section className="editorContainer" id="editorBox">
          <div className="sectionHeader">Editor</div>
          <textarea
            id="editor"
            type="text"
            value={text}
            onChange={(event) => {
              setText(event.target.value);
            }}
          />
        </section>

        <section className="previewContainer" id="previewBox">
          <div className="sectionHeader">Preview</div>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: markdown }}
          ></div>
        </section>
      </main>
    </div>
  );
}

export default App;
