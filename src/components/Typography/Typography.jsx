import { Text } from '@mantine/core';

function Typography({ children, type = 'bold16lh26', ...textProps }) {
  const fontWeightEnum = {
    bold: 700,
    semiBold: 600,
    medium: 500,
    regular: 400,
  };

  const fontSizeEnum = {
    s1: '26px',
    s2: '20px',
    s3: '18px',
    s4: '16px',
    s5: '15px',
    s6: '14px',
    s7: '13px',
    s8: '12px',
  };

  const lineHeightEnum = {
    lh1: '26px',
    lh2: '18px',
  };

  const letterSpacingEnum = {
    ls1: '5%',
    ls2: '2%',
    ls3: '-0.17px',
  };

  const typographyEnum = {
    bold26: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s1,
    },
    bold20lh26: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s2,
      lineHeight: lineHeightEnum.lh1,
    },
    semiBold18: {
      fontWeight: fontWeightEnum.semiBold,
      fontSize: fontSizeEnum.s3,
    },
    medium18: {
      fontWeight: fontWeightEnum.medium,
      fontSize: fontSizeEnum.s3,
    },
    bold16lh26: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s4,
      lineHeight: lineHeightEnum.lh1,
    },
    bold16lh26ls5p: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s4,
      lineHeight: lineHeightEnum.lh1,
      letterSpacing: letterSpacingEnum.ls1,
    },
    medium16: {
      fontWeight: fontWeightEnum.medium,
      fontSize: fontSizeEnum.s4,
    },
    regular16: {
      fontWeight: fontWeightEnum.regular,
      fontSize: fontSizeEnum.s4,
    },
    regular16lh18ls017: {
      fontWeight: fontWeightEnum.regular,
      fontSize: fontSizeEnum.s4,
      lineHeight: lineHeightEnum.lh2,
      letterSpacing: letterSpacingEnum.ls3,
    },
    bold15lh26: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s5,
      lineHeight: lineHeightEnum.lh1,
    },
    bold14lh26: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s6,
      lineHeight: lineHeightEnum.lh1,
    },
    regular14: {
      fontWeight: fontWeightEnum.regular,
      fontSize: fontSizeEnum.s6,
    },
    medium13lh26ls2: {
      fontWeight: fontWeightEnum.medium,
      fontSize: fontSizeEnum.s7,
      lineHeight: lineHeightEnum.lh1,
      letterSpacing: letterSpacingEnum.ls2,
    },
    bold13lh26ls2: {
      fontWeight: fontWeightEnum.bold,
      fontSize: fontSizeEnum.s7,
      lineHeight: lineHeightEnum.lh1,
      letterSpacing: letterSpacingEnum.ls2,
    },
    medium12: {
      fontWeight: fontWeightEnum.medium,
      fontSize: fontSizeEnum.s8,
    },
    medium12lh18ls017: {
      fontWeight: fontWeightEnum.medium,
      fontSize: fontSizeEnum.s8,
      lineHeight: lineHeightEnum.lh2,
      letterSpacing: letterSpacingEnum.ls3,
    },
  };
  return (
    <Text
      {...textProps}
      styles={{
        root: typographyEnum[type],
      }}
    >
      {children}
    </Text>
  );
}

export default Typography;
