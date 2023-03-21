import styled from "styled-components";

export const FlexBox = styled.div<{
  gap?: 4 | 8 | 12 | 16 | 18 | 24;
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "positional alignment"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  flexDirection?:
    | "row"
    | "row-reverse"
    | "column"
    | "column-reverse"
    | "initial"
    | "inherit";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
}>`
  display: flex;
  gap: ${(p) => p.gap}px;
  align-items: ${(p) => p.alignItems ?? "center"};
  justify-content: ${(p) => p.justifyContent ?? "space-between"};
  flex-direction: ${(p) => p.flexDirection ?? undefined};
`;
