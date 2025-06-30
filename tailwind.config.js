module.exports = {
  content: ["./pages/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B365D", // Deep institutional trust and authority
          50: "#EBF4FF", // Very light blue
          100: "#DBEAFE", // Light blue
          200: "#BFDBFE", // Blue-200
          300: "#93C5FD", // Blue-300
          400: "#60A5FA", // Blue-400
          500: "#3B82F6", // Blue-500
          600: "#2563EB", // Blue-600
          700: "#1D4ED8", // Blue-700
          800: "#1E40AF", // Blue-800
          900: "#1B365D", // Custom deep navy
        },
        secondary: {
          DEFAULT: "#2C5282", // Supporting professional depth
          50: "#EDF2F7", // Gray-50
          100: "#E2E8F0", // Gray-100
          200: "#CBD5E0", // Gray-200
          300: "#A0AEC0", // Gray-300
          400: "#718096", // Gray-400
          500: "#4A5568", // Gray-500
          600: "#2D3748", // Gray-600
          700: "#2C5282", // Custom professional blue
          800: "#2A4365", // Blue-800
          900: "#1A202C", // Gray-900
        },
        accent: {
          DEFAULT: "#ED8936", // Energy and forward momentum
          50: "#FFFAF0", // Orange-50
          100: "#FEEBC8", // Orange-100
          200: "#FBD38D", // Orange-200
          300: "#F6AD55", // Orange-300
          400: "#ED8936", // Custom energizing orange
          500: "#DD6B20", // Orange-500
          600: "#C05621", // Orange-600
          700: "#9C4221", // Orange-700
          800: "#7B341E", // Orange-800
          900: "#652B19", // Orange-900
        },
        background: "#FFFFFF", // Clean canvas for content clarity
        surface: {
          DEFAULT: "#F7FAFC", // Subtle section separation - gray-50
          hover: "#EDF2F7", // Gray-100
        },
        text: {
          primary: "#2D3748", // Strong readability - gray-700
          secondary: "#4A5568", // Clear hierarchy - gray-600
          muted: "#718096", // Gray-500
          light: "#A0AEC0", // Gray-400
        },
        success: {
          DEFAULT: "#38A169", // Achievement and positive outcomes - green-600
          light: "#68D391", // Green-400
        },
        warning: {
          DEFAULT: "#D69E2E", // Important information - yellow-600
          light: "#F6E05E", // Yellow-400
        },
        error: {
          DEFAULT: "#E53E3E", // Clear problems - red-600
          light: "#FC8181", // Red-400
        },
        border: {
          DEFAULT: "#E2E8F0", // Light gray borders - gray-200
          light: "#F7FAFC", // Very light borders - gray-50
          dark: "#CBD5E0", // Darker borders - gray-300
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // Headlines and CTAs
        'open-sans': ['Open Sans', 'sans-serif'], // Body text
        inter: ['Inter', 'sans-serif'], // Accents and metrics
        sans: ['Open Sans', 'sans-serif'], // Default sans-serif
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'base': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'md': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'lg': '0 20px 25px rgba(0, 0, 0, 0.1)',
        'card': '0 4px 6px rgba(0, 0, 0, 0.07)',
        'card-hover': '0 10px 15px rgba(0, 0, 0, 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}