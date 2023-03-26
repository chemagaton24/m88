import { css } from "styled-components";

let styles = "";
const sizes = [4, 6, 8, 12, 14, 16, 18, 20, 24, 32, 38, 40, 42, 48, 58];

for (let i = 0; i < sizes.length; i++) {
  styles += `
    .m-b-${sizes[i]} {
        margin-bottom: ${sizes[i]}px;
      }
    `;
}

export const marginBottomCSS = css + styles;
