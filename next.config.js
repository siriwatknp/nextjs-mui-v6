const { withPigment } = require('@pigment-css/nextjs-plugin');
const { experimental_extendTheme } = require('@mui/material');
const { red } = require('@mui/material/colors');
const { alpha } = require('@mui/material/styles');

const brand = {
  50: '#F0F7FF',
  100: '#CEE5FD',
  200: '#9CCCFC',
  300: '#55A6F6',
  400: '#0A66C2',
  500: '#0959AA',
  600: '#064079',
  700: '#033363',
  800: '#02294F',
  900: '#021F3B',
};

const secondary = {
  50: '#F9F0FF',
  100: '#E9CEFD',
  200: '#D49CFC',
  300: '#B355F6',
  400: '#750AC2',
  500: '#6709AA',
  600: '#490679',
  700: '#3B0363',
  800: '#2F024F',
  900: '#23023B',
};

const gray = {
  50: '#FBFCFE',
  100: '#EAF0F5',
  200: '#D6E2EB',
  300: '#BFCCD9',
  400: '#94A6B8',
  500: '#5B6B7C',
  600: '#4C5967',
  700: '#364049',
  800: '#131B20',
  900: '#090E10',
};

const green = {
  50: '#F6FEF6',
  100: '#E3FBE3',
  200: '#C7F7C7',
  300: '#A1E8A1',
  400: '#51BC51',
  500: '#1F7A1F',
  600: '#136C13',
  700: '#0A470A',
  800: '#042F04',
  900: '#021D02',
};

const orange = {
  50: '#FFFBF0',
  100: '#FDF1CE',
  200: '#FCE49C',
  300: '#F6CE55',
  400: '#C2940A',
  500: '#AA8109',
  600: '#795C06',
  700: '#634B03',
  800: '#4F3C02',
  900: '#3B2D02',
};

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    primary: {
      light: brand[200],
      main: brand[500],
      dark: brand[800],
      contrastText: brand[50],
      ...(mode === 'dark' && {
        contrastText: brand[100],
        light: brand[300],
        main: brand[400],
        dark: brand[800],
      }),
    },
    secondary: {
      light: secondary[300],
      main: secondary[500],
      dark: secondary[800],
      ...(mode === 'dark' && {
        light: secondary[400],
        main: secondary[500],
        dark: secondary[900],
      }),
    },
    warning: {
      main: '#F7B538',
      dark: '#F79F00',
      ...(mode === 'dark' && { main: '#F7B538', dark: '#F79F00' }),
    },
    error: {
      light: red[50],
      main: red[500],
      dark: red[700],
      ...(mode === 'dark' && {
        light: '#D32F2F',
        main: '#D32F2F',
        dark: '#B22A2A',
      }),
    },
    success: {
      light: green[300],
      main: green[400],
      dark: green[800],
      ...(mode === 'dark' && {
        light: green[400],
        main: green[500],
        dark: green[700],
      }),
    },
    grey: {
      50: gray[50],
      100: gray[100],
      200: gray[200],
      300: gray[300],
      400: gray[400],
      500: gray[500],
      600: gray[600],
      700: gray[700],
      800: gray[800],
      900: gray[900],
    },
    divider: mode === 'dark' ? alpha(gray[600], 0.3) : alpha(gray[300], 0.5),
    background: {
      default: '#fff',
      paper: gray[50],
      ...(mode === 'dark' && { default: gray[900], paper: gray[800] }),
    },
    text: {
      primary: gray[800],
      secondary: gray[600],
      ...(mode === 'dark' && { primary: '#fff', secondary: gray[400] }),
    },
    action: {
      selected: `${alpha(brand[200], 0.2)}`,
      ...(mode === 'dark' && {
        selected: alpha(brand[800], 0.2),
      }),
    },
  },
});

function getCheckoutTheme(mode) {
  return {
    ...getDesignTokens(mode),
  };
}

const theme = experimental_extendTheme({
  colorSchemes: {
    light: getCheckoutTheme('light'),
    dark: getCheckoutTheme('dark'),
  },
  typography: {
    fontFamily: ['"Inter", "sans-serif"'].join(','),
    h1: {
      fontSize: 60,
      fontWeight: 600,
      lineHeight: 78 / 70,
      letterSpacing: -0.2,
    },
    h2: {
      fontSize: 48,
      fontWeight: 600,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: 42,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: 36,
      fontWeight: 500,
      lineHeight: 1.5,
    },
    h5: {
      fontSize: 20,
      fontWeight: 600,
    },
    h6: {
      fontSize: 18,
    },
    subtitle1: {
      fontSize: 18,
    },
    subtitle2: {
      fontSize: 16,
    },
    body1: {
      fontWeight: 400,
      fontSize: 15,
    },
    body2: {
      fontWeight: 400,
      fontSize: 14,
    },
    caption: {
      fontWeight: 400,
      fontSize: 12,
    },
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: 10,
          backgroundColor: orange[100],
          color: theme.palette.text.primary,
          border: `1px solid ${alpha(orange[300], 0.5)}`,
          '& .MuiAlert-icon': {
            color: orange[500],
          },
          ...theme.applyStyles('dark', {
            backgroundColor: `${alpha(orange[900], 0.5)}`,
            border: `1px solid ${alpha(orange[800], 0.5)}`,
          }),
        }),
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: '10px',
          boxShadow: `0 4px 16px ${alpha(gray[400], 0.2)}`,
          '& .Mui-selected': {
            color: brand[500],
          },
          ...theme.applyStyles('dark', {
            '& .Mui-selected': {
              color: '#fff',
            },
            boxShadow: `0 4px 16px ${alpha(brand[700], 0.5)}`,
          }),
        }),
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '12px 16px',
          textTransform: 'none',
          borderRadius: '10px',
          fontWeight: 500,
          ...theme.applyStyles('dark', {
            color: gray[400],
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.5)',
            '&.Mui-selected': { color: brand[300] },
          }),
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          transition: 'all 100ms ease-in',
          '&:focus-visible': {
            outline: `3px solid ${alpha(brand[500], 0.5)}`,
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          boxShadow: 'none',
          borderRadius: '10px',
          textTransform: 'none',
          variants: [
            {
              props: { size: 'small' },
              style: {
                height: '2rem', // 32px
                padding: '0 0.5rem',
              },
            },
            {
              props: { size: 'medium' },
              style: {
                height: '2.5rem', // 40px
              },
            },
            {
              props: { variant: 'contained', color: 'primary' },
              style: {
                color: brand[50],
                backgroundColor: brand[500],
                backgroundImage: `linear-gradient(to bottom, ${brand[400]}, ${brand[500]})`,
                boxShadow: `inset 0 1px ${alpha(brand[300], 0.5)}, inset 0 -2px ${alpha(
                  brand[700],
                  0.5,
                )}`,
                border: `1px solid ${brand[500]}`,
                '&:hover': {
                  backgroundColor: brand[400],
                  backgroundImage: 'none',
                  boxShadow: `0 0 0 1px  ${alpha(brand[300], 0.5)}`,
                },
              },
            },
            {
              props: {
                variant: 'outlined',
              },
              style: {
                backgroundColor: alpha(brand[300], 0.1),
                borderColor: brand[300],
                color: brand[500],
                '&:hover': {
                  backgroundColor: alpha(brand[300], 0.3),
                  borderColor: brand[200],
                },
              },
            },
            {
              props: { variant: 'text' },
              style: {
                color: brand[500],
                '&:hover': {
                  backgroundColor: alpha(brand[300], 0.3),
                  borderColor: brand[200],
                },
              },
            },
            {
              props: { variant: 'contained', color: 'primary' },
              style: {
                ...theme.applyStyles('dark', {
                  border: `1px solid ${brand[600]}`,
                  backgroundImage: 'none',
                  backgroundColor: brand[500],
                  '&:hover': {
                    background: brand[600],
                    backgroundImage: 'none',
                    boxShadow: `0 0 0 1px  ${alpha(brand[700], 0.5)}`,
                  },
                }),
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                ...theme.applyStyles('dark', {
                  backgroundColor: alpha(brand[600], 0.1),
                  borderColor: brand[700],
                  color: brand[300],
                  '&:hover': {
                    backgroundColor: alpha(brand[600], 0.3),
                    borderColor: brand[700],
                  },
                }),
              },
            },
            {
              props: { variant: 'text' },
              style: {
                ...theme.applyStyles('dark', {
                  color: brand[300],
                  '&:hover': {
                    backgroundColor: alpha(brand[600], 0.3),
                    borderColor: brand[700],
                  },
                }),
              },
            },
          ],
        }),
      },
    },
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: gray[50],
          borderRadius: 10,
          outline: `1px solid ${alpha(gray[200], 0.8)}`,
          boxShadow: 'none',
          transition: 'background-color, border, 80ms ease',
          ...theme.applyStyles('dark', {
            backgroundColor: alpha(gray[800], 0.6),
            outline: `1px solid ${alpha(gray[700], 0.3)}`,
          }),
          variants: [
            {
              props: { variant: 'outlined' },
              style: {
                boxSizing: 'border-box',
                background: `linear-gradient(to bottom, #FFF, ${gray[50]})`,
                '&:hover': {
                  borderColor: brand[300],
                  boxShadow: `0 0 24px ${brand[100]}`,
                },
                ...theme.applyStyles('dark', {
                  boxSizing: 'border-box',
                  background: `linear-gradient(to bottom, ${gray[900]}, ${alpha(gray[800], 0.5)})`,
                  '&:hover': {
                    borderColor: brand[700],
                    boxShadow: `0 0 24px ${brand[800]}`,
                  },
                }),
              },
            },
          ],
        }),
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderColor: `${alpha(gray[200], 0.8)}`,
          ...theme.applyStyles('dark', {
            borderColor: `${alpha(gray[700], 0.4)}`,
          }),
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundImage: 'none',
          backgroundColor: gray[100],
          ...theme.applyStyles('dark', {
            backgroundColor: gray[800],
          }),
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none',
        },
        root: ({ theme }) => ({
          '& .MuiInputBase-input': {
            '&::placeholder': {
              opacity: 0.7,
              color: gray[500],
            },
          },
          boxSizing: 'border-box',
          flexGrow: 1,
          maxHeight: 40,
          height: '100%',
          borderRadius: '10px',
          border: '1px solid',
          borderColor: gray[200],
          boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.1)',
          transition: 'border-color 120ms ease-in',
          backgroundColor: alpha(gray[100], 0.4),
          '&:hover': {
            borderColor: brand[300],
          },
          '&.Mui-focused': {
            borderColor: brand[400],
            outline: '4px solid',
            outlineColor: brand[200],
          },
          ...theme.applyStyles('dark', {
            '& .MuiInputBase-input': {
              '&::placeholder': {
                opacity: 1,
                color: gray[500],
              },
            },
            boxSizing: 'border-box',
            flexGrow: 1,
            minHeight: 40,
            height: '100%',
            borderRadius: '10px',
            border: '1px solid',
            borderColor: gray[700],
            boxShadow: '0px 2px 2px rgb(0, 0, 0)',
            backgroundColor: alpha(gray[800], 0.4),
            transition: 'border-color 120ms ease-in',
            '&:hover': {
              borderColor: brand[300],
            },
            '&.Mui-focused': {
              borderColor: brand[400],
              outline: '4px solid',
              outlineColor: alpha(brand[500], 0.5),
            },
          }),
        }),
        input: {
          paddingLeft: 10,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          typography: theme.typography.caption,
          marginBottom: 8,
        }),
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          border: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& label .Mui-focused': {
            color: 'white',
          },
          '& .MuiInputBase-input': {
            '&::placeholder': {
              opacity: 0.7,
              color: gray[500],
            },
          },
          '& .MuiOutlinedInput-root': {
            boxSizing: 'border-box',
            minWidth: 280,
            minHeight: 40,
            height: '100%',
            borderRadius: '10px',
            '& fieldset': {
              border: 'none',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              background: `${alpha('#FFF', 0.3)}`,
            },
            '&:hover': {
              borderColor: brand[300],
            },
            '&.Mui-focused': {
              borderColor: brand[400],
              outline: '4px solid',
              outlineColor: brand[200],
            },
          },
          variants: [
            {
              props: { variant: 'standard' },
              style: {
                '&.MuiTextField-root': {
                  '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
                    borderColor: brand[200],
                  },
                },
                '& :before': {
                  borderBottom: '1px solid',
                  borderColor: gray[200],
                },
                '&:hover': {
                  '& :before': {
                    borderColor: brand[300],
                  },
                },
                ...theme.applyStyles('dark', {
                  '&.MuiTextField-root': {
                    '& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before': {
                      borderColor: brand[200],
                    },
                  },
                  '& :before': {
                    borderBottom: '1px solid',
                    borderColor: gray[700],
                  },
                  '&:hover': {
                    '& :before': {
                      borderColor: brand[300],
                    },
                  },
                }),
              },
            },
          ],
          ...theme.applyStyles('dark', {
            '& .MuiInputBase-input': {
              '&::placeholder': {
                opacity: 1,
                color: gray[500],
              },
            },
            '& .MuiOutlinedInput-root': {
              boxSizing: 'border-box',
              minWidth: 280,
              minHeight: 40,
              height: '100%',
              borderRadius: '10px',
              transition: 'border-color 120ms ease-in',
              '& fieldset': {
                border: 'none',
                boxShadow: ' 0px 2px 4px rgba(0, 0, 0, 0.4)',
                background: `${alpha(gray[800], 0.4)}`,
              },
              '&:hover': {
                borderColor: brand[300],
              },
              '&.Mui-focused': {
                borderColor: brand[400],
                outline: '4px solid',
                outlineColor: alpha(brand[500], 0.5),
              },
            },
          }),
        }),
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: ({ theme }) => ({
          borderTop: '1px solid',
          borderColor: theme.palette.divider,
          flex: 1,
          borderRadius: '99px',
        }),
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: ({ theme }) => ({
          '&.Mui-completed': {
            opacity: 0.4,
            ...theme.applyStyles('dark', { opacity: 0.3 }),
          },
        }),
      },
    },
    MuiStepIcon: {
      variants: [
        {
          props: { completed: true },
          style: {
            width: 12,
            height: 12,
          },
        },
      ],
      styleOverrides: {
        root: ({ theme }) => ({
          color: 'transparent',
          border: `1px solid ${gray[400]}`,
          width: 12,
          height: 12,
          borderRadius: '50%',
          '& text': {
            display: 'none',
          },
          '&.Mui-active': {
            border: 'none',
            color: theme.palette.primary.main,
          },
          '&.Mui-completed': {
            border: 'none',
            color: theme.palette.success.main,
          },
          ...theme.applyStyles('dark', {
            border: `1px solid ${gray[700]}`,
            '&.Mui-active': {
              border: 'none',
              color: theme.palette.primary.light,
            },
            '&.Mui-completed': {
              border: 'none',
              color: theme.palette.success.light,
            },
          }),
        }),
      },
    },
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withPigment(nextConfig, {
  theme,
  transformLibraries: ['@mui/material'],
  transformSx: true,
});