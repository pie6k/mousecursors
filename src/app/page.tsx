"use client";

import styled, { createGlobalStyle } from "styled-components";

const cursors = [
  "default",
  "pointer",
  "text",
  "move",
  "grab",
  "grabbing",
  "crosshair",
  "cell",
  "copy",
  "alias",
  "help",
  "context-menu",
  "wait",
  "progress",
  "not-allowed",
  "no-drop",
  "none",
  "all-scroll",
  "zoom-in",
  "zoom-out",
  "vertical-text",
  "col-resize",
  "row-resize",
  "n-resize",
  "s-resize",
  "e-resize",
  "w-resize",
  "ne-resize",
  "nw-resize",
  "se-resize",
  "sw-resize",
  "ew-resize",
  "ns-resize",
  "nesw-resize",
  "nwse-resize",
] as const;

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: -apple-system, "SF Pro Display", "SF Pro Text", "Helvetica Neue", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(180deg, #68b7e8 0%, #4373b8 100%);
  padding: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 24px;
  width: 100%;
  max-width: 1080px;
`;

const Tile = styled.div<{ $cursor: string }>`
  background: #fff;
  border-radius: 14px;
  corner-shape: squircle;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(p) => p.$cursor};
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
`;

const CursorName = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #1a1a1a;
  user-select: none;
`;

const Hint = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 32px;
`;

const Footer = styled.a`
  position: fixed;
  bottom: 10px;
  right: 14px;
  font-size: 10px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  z-index: 10;
  letter-spacing: 0.3px;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.55);
  }
`;

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Grid>
          {cursors.map((cursor) => (
            <Tile key={cursor} $cursor={cursor}>
              <CursorName>{cursor}</CursorName>
            </Tile>
          ))}
        </Grid>
        <Hint>Hover each tile to preview the CSS cursor</Hint>
        <Footer
          href="https://screen.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made at Screen Studio
        </Footer>
      </Wrapper>
    </>
  );
}
