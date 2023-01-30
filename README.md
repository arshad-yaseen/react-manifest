[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arshad-yaseen/react-manifest/blob/main/LICENCE) 
 
 React-Manifest is a simple library that allows you to easily update your manifest.json file in your React application. It allows you to specify the details of your application such as the name, icons, and related applications.



## Installation

with npm

```bash
  npm install react-manifest

```

with yarn

```bash
  yarn add react-manifest

```

## Step 2
Import the package in your React component

```javascript
  import reactManifest from "react-manifest"

```
or

```javascript
  const reactManifest = require("react-manifest")

```
## Step 3

Add a `<link>` tag in your index.html file with the `id` attribute set to "manifest-placeholder" and `href` attribute set to "./manifest.json"

```html
  <link rel="manifest" id="manifest-placeholder" href="./manifest.json"  />

```

## Step 4

In your React component, create an object with the details you want to update in your manifest.json file. For example:

```javascript
  const manifestDetails = {

    "name": "My Web App",
    "short_name": "My App",
    "start_url": "index.html",
    "display": "standalone",
    "orientation": "portrait",
    "theme_color": "#000000",
    "background_color": "#ffffff",
    "icons": [
        {
            "src": "icon-192x192.png",
            "sizes": "192x192"
        },
        {
            "src": "icon-512x512.png",
            "sizes": "512x512"
        }
    ],
    
    
    // And More...

}


```

## Step 5

Use the `update` method to update your manifest.json file by passing in the manifest details and the id of the `<link>` tag in your index.html file.

```javascript
  reactManifest.update(manifestDetails, "#manifest-placeholder")
```

## Final ReactJs Code

```javascript
import React, { useEffect } from 'react';
import reactManifest from 'react-manifest';

const MyComponent = () => {

  useEffect(() => {
      
    const manifestDetails = {
      "name": "My Web App",
      "short_name": "My App",
      "start_url": "index.html",
      "display": "standalone",
      "orientation": "portrait",
      "theme_color": "#000000",
      "background_color": "#ffffff",
      "icons": [
        {
            "src": "icon-192x192.png",
            "sizes": "192x192"
        },
        {
            "src": "icon-512x512.png",
            "sizes": "512x512"
        }
      ],
      
      And More...

    };
  
    reactManifest.update(manifestDetails, "#manifest-placeholder");

  }, []); 


  return (

    <div>
        ...
    </div>

  );
};

export default MyComponent;

```

## Final HTML Code

```html
  <!DOCTYPE html>
<html>
  <head>
    <title>My Web App</title>
    <link rel="manifest" id="manifest-placeholder" href="./manifest.json"  />
  </head>
  <body>
    <div id="root"></div>
    <script src="./index.js"></script>
  </body>
</html>

```

# 💖✨ 
### And that's it! You have successfully updated your manifest.json file with the details provided. You can use this package to easily update your manifest.json file and customize your PWA experience.