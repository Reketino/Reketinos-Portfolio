 "use client";
 import React from 'react'
 import Editor from "@monaco-editor/react";


export default function BearCode() {
  return (
    <main className='flex flex-col w-full h-full bg-[#1e1e1e]'>
        <div className='flex-1 min-h-0'>
      <Editor
      height="100%"
      defaultLanguage='javascript'
      defaultValue={`// BearCode // Boot
//---------------------------------------
const msgs = [
  "Rebooting developer ego…",
  "Loading excuses for bad code…",
  "Patching yesterday's mistakes…",
  "Calibrating overconfidence…",
  "Deploying genius mode… (fails silently)"
];

function log(m) {
  console.log(\`[\${new Date().toLocaleTimeString()}] \${m}\`);
}

log(msgs[Math.floor(Math.random() * msgs.length)]);

// TODO:
// - Pretend to know what you're doing.
// - Google smarter, not harder.
// - If bug persists: rename variable and pray.

log("BearCode online. Try not to break anything.");
`}
      theme='vs-dark'
      options={{
        fontSize: 16,
        automaticLayout: true,
        minimap: { enabled:false },
        smoothScrolling: true,
        scrollBeyondLastLine: false,
      }}
    />
    </div>
    </main>
  );
}
