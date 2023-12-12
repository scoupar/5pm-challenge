"use client";

import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <>
      <Editor
        apiKey="qgbaast2weokjoteobf76hsav5pktosovbe13k99zp15dhwg"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue=""
        init={{
          height: 250,
          menubar: false,
          plugins: ["wordcount"],
          toolbar: "bold",
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
    </>
  );
}
