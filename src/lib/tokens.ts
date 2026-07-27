// tokens.ts
export const tokens = {
  colors: {
    // Paleta inspirada en naturaleza
    stone: {
      50: '#fafaf9',
      100: '#f5f5f4',
      200: '#e7e5e4',
      300: '#d6d3d1',
      400: '#a8a29e',
      500: '#78716c',
      600: '#57534e',
      700: '#44403c',
      800: '#292524',
      900: '#1c1917',
    },
    sage: {
      50: '#f4f7f4',
      100: '#e3ebe3',
      200: '#c5d8c5',
      300: '#9ebf9e',
      400: '#76a376',
      500: '#5a855a',
      600: '#466a46',
      700: '#3a553a',
      800: '#304430',
      900: '#283828',
    },
    sand: {
      50: '#fdfcfa',
      100: '#faf8f3',
      200: '#f3efe6',
      300: '#e8e1d1',
      400: '#d4c9b0',
      500: '#b8a98a',
      600: '#9a8b6e',
      700: '#7d7059',
      800: '#665c4a',
      900: '#544c3e',
    },
    // Accent
    terracotta: '#c67b5c',
    moss: '#6b8e6b',
    dawn: '#e8ddd4',
  },
  
  typography: {
    fontFamily: {
      sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      display: ['var(--font-cormorant)', 'Georgia', 'serif'],
    },
    fontSize: {
      'display-1': ['clamp(3rem, 8vw, 6rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      'display-2': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      'heading-1': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      'heading-2': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.25' }],
      'heading-3': ['1.5rem', { lineHeight: '1.3' }],
      'body-lg': ['1.125rem', { lineHeight: '1.7' }],
      'body': ['1rem', { lineHeight: '1.7' }],
      'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      'caption': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
    },
  },
  
  spacing: {
    section: 'clamp(4rem, 10vw, 8rem)',
    content: 'clamp(1rem, 5vw, 3rem)',
  },
  
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easing: {
      smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      cinematic: 'cubic-bezier(0.65, 0, 0.35, 1)',
    },
  },
  
  shadows: {
    subtle: '0 1px 3px rgba(0,0,0,0.04)',
    soft: '0 4px 20px rgba(0,0,0,0.06)',
    elevated: '0 8px 40px rgba(0,0,0,0.08)',
  },
  
  radii: {
    subtle: '4px',
    soft: '8px',
    pill: '9999px',
  },
} as const;