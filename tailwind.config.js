/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{astro,md,mdx}',
        './src/components/**/*.{astro,md,mdx}',
        './src/layouts/**/*.{astro,md,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#F43F5E'
            },
            fontFamily: {

                writer: ['Caveat', 'cursive'],
            }
        }
    }
};
