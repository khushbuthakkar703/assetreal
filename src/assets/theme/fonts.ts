import { Font } from 'styled-components';

const createFontProps =
  (name: string, weight: number) =>
  (size: number, height: number, hover: boolean = false) =>
`
  font-family: ${name};
  font-style: normal;
  font-weight: ${weight};
  font-size: ${size}px;
  line-height: ${height}px;
  ${hover ? 'text-decoration-line: underline;' : ''}
`;

const customFontBold = createFontProps('PublicSans-Bold', 600);
const customFontRegular = createFontProps('PublicSans-Regular', 400);
const customFontMedium = createFontProps('PublicSans-Medium', 500);


export const fonts: Font = {
  h: {
    1: customFontBold(60, 64),
    2: customFontBold(55, 64),
    3: customFontBold(50, 64),
    4: customFontBold(45, 54),
    5: customFontBold(40, 50),
    6: customFontBold(36, 48),
    7: customFontBold(30, 40),
    8: customFontBold(25, 36),
    9: customFontBold(20, 30),
    10: customFontBold(18, 30),
    11: customFontBold(14, 16),
    12: customFontBold(12, 14)
  },

  p: {
    1: customFontRegular(20, 32),
    2: customFontRegular(18, 30),
    3: customFontRegular(16, 28),
    4: customFontRegular(15, 26),
    5: customFontRegular(14, 21),
    6: customFontRegular(13, 22),
    7: customFontRegular(12, 22)
  },

  c_regular: {
    1: customFontRegular(18, 24),
    2: customFontRegular(16, 24),
    3: customFontRegular(15, 24),
    4: customFontRegular(14, 20),
    5: customFontRegular(13, 20),
    6: customFontRegular(12, 20),

    hover_4: customFontRegular(14, 20, true),
    hover_5: customFontRegular(13, 20, true)
  },

  c_medium: {
    1: customFontMedium(18, 24),
    2: customFontMedium(16, 24),
    3: customFontMedium(15, 24),
    4: customFontMedium(14, 22),
    5: customFontMedium(13, 20),
    6: customFontMedium(12, 20),
    
    hover_4: customFontMedium(14, 20, true),
    hover_5: customFontMedium(13, 20, true)
  }
};
