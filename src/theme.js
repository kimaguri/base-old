// theme.js
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            // Resetting padding and margin for all elements
            "*": {
                padding: 0,
                margin: 0,
            },
            // Or reset styles for specific elements, e.g., body
            body: {
                padding: 0,
                margin: 0,
            },


            // Add other global styles or resets
        },
    },
});