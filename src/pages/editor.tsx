import React from "react";
import Builder from "../../packages/builder/components/Builder";
import Canvas from "../../packages/builder/components/Canvas";


export async function getStaticProps() {
  return { props: { bodyClass: 'editorPage' } };
}

export default function EditorPage() {
  return (
    <Builder
      initialPageMetaData={{
        path: '/test'
      }}
    >
      <Canvas componentMap={{}} />
    </Builder>
  )
}