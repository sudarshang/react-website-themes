import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const meta = css`
  margin: 0.5em 0 2em;
  font-size: 0.9em;
  color: var(--lightTextColor);
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: var(--secondFontFamily);

  ${mq({
    flexDirection: ['column', 'row'],
  })};

  [class$='-blog'] & {
    margin-bottom: 1em;
  }

  & span {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding-right: 10px;

    ${mq({
      marginBottom: ['6px', '0'],
    })};
  }

  & svg {
    margin: 2px 5px 0 0;
    width: 16px;
    height: 16px;
  }
`;

export default meta;
