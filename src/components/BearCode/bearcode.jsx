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
      defaultValue={`// BearCode IDE 🚀\nconsole.log("Hello Bear!");`}
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
