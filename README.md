## Get the gist is a Github Gist clone

#### built with React.js

### To run frontend locally:

1. Start the backend server found [here](https://github.com/KristenLingwood/GetTheGist_backend)
2. Fork/clone the repository
3. cd into repo's folder
4. `npm install`
5. `npm start` (You may just need to type Y to open in new port when prompted by your terminal.)

### Tests:

1. `npm test`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Component Hierarchy:

```
index
├── react-router-dom/BrowserRouter
└─┬ src/components/App
  ├── src/components/Footer
  ├─┬ src/components/Header
  │ ├── react-bootstrap/Button
  │ ├── react-bootstrap/FormControl
  │ ├── react-bootstrap/FormGroup
  │ ├── react-bootstrap/Nav
  │ ├── react-bootstrap/Navbar
  │ └── react-bootstrap/NavItem
  └─┬ src/components/Routes
    ├── react-router-dom/Redirect
    ├── react-router-dom/Route
    ├── react-router-dom/Switch
    ├─┬ src/components/Gist
    │ ├── react-bootstrap/Button
    │ └─┬ src/components/GistForm
    │   ├── react-bootstrap/Button
    │   ├── react-bootstrap/FormControl
    │   └── react-bootstrap/FormGroup
    ├─┬ src/components/GistsHome
    │ └─┬ src/components/GistForm
    │   ├── react-bootstrap/Button
    │   ├── react-bootstrap/FormControl
    │   └── react-bootstrap/FormGroup
    └── src/services/Custom404/Custom404
```
