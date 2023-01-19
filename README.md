# Loudness - Visualizer :
[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://github.com/Aubert-Antoine/loudness-visualizer/blob/master/LICENSE.GPL)
[![Dev In Progress](https://img.shields.io/badge/development-In%20Progress-brightgreen)](https://gitHub.com/Aubert-Antoine/loudness-visualizer/graphs/commit-activity)


>**Note** : 
Loudness - Visualizer is a personal, ongoing project. It is a Chrome extension, which is able to retrieve the audio stream of the current web page and display the sound strength in several ways. 

**Check there sections**
> **[`issues`](https://github.com/Aubert-Antoine/loudness-visualizer/issues)**
> **[`discussions`](https://github.com/Aubert-Antoine/loudness-visualizer/discussions)**

## Code information
### Load the extension : 
Load the extension on Chrome [**here**](chrome://extensions/) and select `./dist`.
The code make in the `./src` folder is transcript in the `./dist` thanks to [*webpack*](https://webpack.js.org/)

### The Git Graph : 
```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'rotateCommitLabel': true}} }%%
    gitGraph
       commit id: "1"
       commit id: "2"
       commit id: "3"
       branch dev
       commit id: "4"
       checkout dev
       branch React
       commit id: "5" tag: "Bug to render html and css" type: REVERSE
       
```

### The **yarn commands** : 
```
yarn run dev --watch
```

### Yarn : 
> **Warning**
> yarn is needed to run the code :
```
yarn init -y
yarn add react react-dom
yarn add webpack webpack-cli --dev
yarn add ts-loader
yarn add -D copy-webpack-plugin
yarn add -D html-webpack-plugin
yarn add -D style-loader css-loader
yarn add -D tailwindcss postcss autoprefixer
yarn add -D postcss-loader

```
and type script 
`yarn add global typescript`
