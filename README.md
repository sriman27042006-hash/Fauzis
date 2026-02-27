# Code Optimizer

A modern React + Vite application for optimizing, analyzing, and formatting code with AI-powered suggestions.

## Features

- **Code Optimization** - Get instant suggestions for code optimization and performance improvements
- **Code Analysis** - Deep analysis to identify potential issues and code quality metrics
- **Code Formatting** - Automatic code formatting with customizable options
- **Dark/Light Theme** - Toggle between dark and light themes for comfortable viewing
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Copy to Clipboard** - Easy-to-use copy functionality for optimized code
- **Preserved Formatting** - Maintains proper newlines, indentation, and code structure

## Project Structure

```
my-react-app/
├── public/                  # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   └── CodeBlock.jsx   # Syntax-highlighted code display component
│   ├── context/            # React Context providers
│   │   └── ThemeContext.jsx # Theme management (light/dark mode)
│   ├── pages/              # Page components
│   │   ├── Home.jsx        # Landing page
│   │   ├── Home.css        # Home page styles
│   │   ├── Editor.jsx      # Code editor interface
│   │   └── Editor.css      # Editor page styles
│   ├── services/           # API and external services
│   │   └── api.js          # API helper functions
│   ├── assets/             # Images and static files
│   ├── App.tsx             # Main App component
│   ├── App.css             # Global app styles
│   ├── main.tsx            # React entry point
│   └── index.css           # Global styles
├── eslint.config.js        # ESLint configuration
├── vite.config.ts          # Vite configuration
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # App-specific TypeScript config
├── tsconfig.node.json      # Node-specific TypeScript config
└── README.md               # This file
```

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository** (if applicable)

   ```bash
   git clone <repository-url>
   cd my-react-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables** (optional)
   Create a `.env` file in the root directory:
   ```
   VITE_API_BASE_URL=http://localhost:5000/api
   ```

## Development

### Start Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Output files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## Usage

### Home Page

The home page introduces the Code Optimizer with:

- Feature highlights
- Call-to-action button to navigate to the editor
- Step-by-step guide on how to use the tool

### Editor Page

1. **Input Code** - Paste or type your code in the input textarea
2. **Select Operation** - Click one of these buttons:
   - **Optimize** - Get optimization suggestions
   - **Format** - Format your code automatically
   - **Analyze** - Get detailed code analysis
   - **Clear** - Reset all inputs and outputs
3. **View Results** - Switch between tabs to view optimized code or analysis
4. **Copy Code** - Click "Copy Code" button to copy to clipboard

### Theme Toggle

Click the theme toggle button (🌙/☀️) in the navbar to switch between dark and light modes.

## API Integration

The application integrates with a backend API for code operations. Configure the API base URL:

```javascript
// In src/services/api.js
const API_BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:5000/api";
```

### Available API Endpoints

- `POST /api/optimize-code` - Optimize code
- `POST /api/analyze-code` - Analyze code
- `POST /api/code-suggestions` - Get code suggestions
- `POST /api/format-code` - Format code
- `GET /api/health` - Health check

## Components

### CodeBlock Component

Displays syntax-highlighted code with copy functionality.

```jsx
import CodeBlock from "./components/CodeBlock";

<CodeBlock code={codeString} language="javascript" />;
```

### ThemeContext

Provides theme management throughout the app.

```jsx
import { useTheme } from "./context/ThemeContext";

const { theme, toggleTheme } = useTheme();
```

## Styling

The application uses:

- **CSS Modules** for component-specific styles
- **Global CSS** in `index.css` for base styles
- **CSS Custom Properties** for theming
- **Responsive Design** with mobile-first approach

### Color Scheme

- **Primary Color** - #646cff (Blue)
- **Primary Dark** - #535acc (Dark Blue)
- **Success** - #4caf50 (Green)
- **Danger** - #f44336 (Red)
- **Light Background** - #ffffff
- **Dark Background** - #1a1a1a

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

### Core Dependencies

- **React** - ^19.2.0 - UI library
- **ReactDOM** - ^19.2.0 - React DOM rendering

### Development Dependencies

- **Vite** - ^7.3.1 - Fast build tool and dev server
- **@vitejs/plugin-react** - ^5.1.1 - React plugin for Vite
- **TypeScript** - ~5.9.3 - Type checking
- **ESLint** - ^9.39.1 - Code linting
- **eslint-plugin-react-hooks** - ^7.0.1 - React hooks linting
- **eslint-plugin-react-refresh** - ^0.4.24 - React refresh linting

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run lint`    | Run ESLint checks        |
| `npm run preview` | Preview production build |

## Performance Optimizations

- Code splitting and lazy loading
- Optimized re-renders with React hooks
- CSS transitions for smooth animations
- Proper use of context to avoid unnecessary prop drilling
- Monospace fonts for code display

## Accessibility

- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Proper color contrast ratios
- Focus management for buttons and inputs

## Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically use the next available port.

### API Connection Issues

Ensure your backend API server is running and the `API_BASE_URL` is correctly configured.

### Build Errors

Clear the cache and reinstall dependencies:

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues and questions, please open an issue in the repository.

---

**Last Updated:** February 2026

For more information, visit the [Vite Documentation](https://vitejs.dev) or [React Documentation](https://react.dev)
