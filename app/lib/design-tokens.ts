/**
 * Design Tokens extracted from Figma design
 * Used for consistent styling across the demo form
 */

export const designTokens = {
  colors: {
    // Primary colors
    primary: {
      main: '#6930CA', // Purple color from radio button
      text: 'rgba(0, 0, 0, 0.87)', // Main text color
      textSecondary: '#A6A7B0', // Secondary text color (placeholder, helper text)
    },
    // Background colors
    background: {
      paper: '#FFFFFF',
      default: '#FFFFFF',
    },
    // Border colors
    border: {
      main: '#A6A7B0', // Input border color
    },
    // Radio button colors
    radio: {
      checked: '#6930CA',
      unchecked: 'rgba(0, 0, 0, 0.6)',
    },
  },

  typography: {
    fontFamily: 'DM Sans, Arial, sans-serif',
    
    // Typography variants from Figma
    label: {
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '1.4em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
    input: {
      fontSize: '14px',
      fontWeight: 500,
      lineHeight: '1.4em',
      color: '#A6A7B0',
    },
    radioLabel: {
      fontSize: '12px',
      fontWeight: 500,
      lineHeight: '1.4em',
      color: 'rgba(0, 0, 0, 0.87)',
    },
  },

  spacing: {
    // Spacing values from Figma layout
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '25px',
    
    // Specific spacing for form elements
    inputGap: '8px',
    formFieldGap: '12px',
    sectionGap: '16px',
  },

  borderRadius: {
    input: '8px',
    radio: '100px',
  },

  layout: {
    // Form container dimensions based on Figma
    formWidth: '550px',
    inputFieldWidth: '469px',
    inputHeight: '48px',
    textAreaHeight: '122px',
    
    // Padding values from Figma
    inputPadding: '16px',
    contentPadding: '16px 0px',
    labelPadding: '12px 0px 0px 10px',
  },

  shadows: {
    none: 'none',
    input: '0px 1px 3px rgba(0, 0, 0, 0.1)',
  },
} as const;

// Export individual token categories for easier imports
export const { colors, typography, spacing, borderRadius, layout, shadows } = designTokens;

// Utility function to get CSS custom properties
export const getCSSCustomProperties = () => {
  return {
    '--color-primary-main': colors.primary.main,
    '--color-primary-text': colors.primary.text,
    '--color-primary-text-secondary': colors.primary.textSecondary,
    '--color-border-main': colors.border.main,
    '--font-family': typography.fontFamily,
    '--border-radius-input': borderRadius.input,
    '--spacing-md': spacing.md,
    '--spacing-lg': spacing.lg,
  };
};