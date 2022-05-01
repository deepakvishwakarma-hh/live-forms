import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'
const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
})


const theme = extendTheme({
    colors: {
        black: '#16161D',
        white: 'white   '
    },
    breakpoints,
})


const textResponsiveSizes = {
    sm: [".8rem", ".8rem", ".9rem", "1rem"],
    lg: ["1.8rem", "1.8rem", "1.9rem", "2.1rem"]
}
export { textResponsiveSizes }

export default theme