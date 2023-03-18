import React from "react";
import Builder from "../packages/builder/components/Builder";
import Canvas from "../packages/builder/components/Canvas";
import * as MaterialUI from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search'
import { Search, SearchIconWrapper, StyledInputBase } from "../packages/builder/components/UI/Header/HeaderDefault";
import Sidebar from "../packages/builder/components/Sidebar";
import Page from "../components/Page";

export async function getStaticProps() {
  return { props: { bodyClass: 'editorPage' } };
}

export default function EditorPage() {
  return (
    <Page>
      <Builder
        initialPageMetaData={{
          path: '/test'
        }}
      >
        <Sidebar />
        <Canvas componentMap={{
          ...MaterialUI as any,
          MenuIcon,
          IconButton,
          Search,
          SearchIcon,
          SearchIconWrapper,
          StyledInputBase
        }} />
      </Builder>
    </Page>
  )
}