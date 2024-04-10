import { withPigment } from '@pigment-css/nextjs-plugin';
import { experimental_extendTheme as extendTheme } from '@mui/material';

const theme = extendTheme();

console.log(theme.colorSchemes.light.palette.action)
console.log(theme.colorSchemes.dark.palette.action)
console.log(theme.generateStyleSheets());

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPigment(nextConfig, {
  theme,
  transformLibraries: ['@mui/material'],
  transformSx: true,
});
