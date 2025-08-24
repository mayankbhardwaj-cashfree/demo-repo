// Design tokens extracted from Figma design system
export const designTokens = {
  // Colors from Figma
  colors: {
    primary: {
      purple: '#6930CA',
      text: 'rgba(0, 0, 0, 0.87)',
      textSecondary: '#A6A7B0',
      background: '#FFFFFF',
      border: '#A6A7B0',
    },
    radio: {
      checked: '#6930CA',
      unchecked: 'rgba(0, 0, 0, 0.6)',
    }
  },

  // Typography from Figma
  typography: {
    fontFamily: {
      primary: 'DM Sans, system-ui, -apple-system, sans-serif'
    },
    heading: {
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '1.4em',
    },
    body: {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: '1.4em',
    },
    small: {
      fontWeight: 500,
      fontSize: '12px',
      lineHeight: '1.4em',
    }
  },

  // Spacing from Figma layout
  spacing: {
    xs: '8px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '25px',
  },

  // Border radius from Figma
  borderRadius: {
    input: '8px',
    radio: '100px',
  },

  // Layout dimensions from Figma
  layout: {
    formWidth: '550px',
    inputFieldWidth: '469px',
    inputHeight: '48px',
    textAreaHeight: '122px',
    fieldSpacing: '110px',
  },

  // Component specific tokens
  components: {
    textField: {
      padding: '16px',
      borderWidth: '1px',
      borderColor: '#A6A7B0',
      backgroundColor: '#FFFFFF',
    },
    radio: {
      size: '20px',
      padding: '9px',
    }
  }
} as const;

// Tailwind CSS custom classes based on design tokens
export const customStyles = {
  formContainer: 'w-[550px] min-h-[901px] bg-white',
  inputField: 'w-[469px] h-[110px]',
  inputLabel: 'text-sm font-bold text-black/87 leading-[1.4em] mb-3',
  textInput: 'w-full h-12 px-4 py-4 border border-[#A6A7B0] rounded-lg text-sm font-medium text-[#A6A7B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#6930CA] focus:border-[#6930CA]',
  textArea: 'w-full h-[122px] px-4 py-3 border border-[#A6A7B0] rounded-lg text-sm font-medium text-[#A6A7B0] bg-white focus:outline-none focus:ring-2 focus:ring-[#6930CA] focus:border-[#6930CA] resize-none',
  radioGroup: 'flex gap-6 mt-4',
  radioItem: 'flex items-center gap-2',
  radioButton: 'w-5 h-5',
  radioLabel: 'text-xs font-medium text-black/87 leading-[1.4em]',
  fieldSpacing: 'mb-8',
} as const;