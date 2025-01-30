## Quick Start

### Prerequisites
- Node.js installed (v18 or higher)
- npm (comes with Node.js)
- Git for version control

### Setup Steps

1. Create a new Vite project:
```bash
npm create vite@latest recruitment-portal -- --template react
cd investment-portal
```

2. Install dependencies:
```bash
npm install react-router-dom @headlessui/react lucide-react @fortawesome/fontawesome-free --save
npm install -D tailwindcss postcss autoprefixer --save
```

3. Initialise Tailwind CSS:
```bash
npx tailwindcss init -p
```

## Important note

Make sure you are using stable versions of the above technologies, here are the stable versions as defined in package.json:

```json
{
  "dependencies": {
    "@fortawesome/fontawesome-free": "^6.5.1",
    "@headlessui/react": "^1.7.17",
    "lucide-react": "^0.298.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.21.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.43",
    "@types/react-dom": "^18.2.17",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.16",
    "eslint": "^8.55.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.5",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.8"
  }
}
```