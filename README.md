# Introduce

This is a mini pack which can bundle javascript files

learned from Ronen Amiel - Build Your Own Webpack

Here is the origin repo: [minipack](https://github.com/ronami/minipack/blob/master/src/minipack.js)

# What i learn ?

- extract js file to ast.
- translate ast to commonjs code which can be run by all the popular browser.
- how to understand dependent relationship between js files and generate dependency graph.
- splice modules and run.

# Files Here

```
.
├── app.js  // result
├── bundle.js // main file
├── example // whick will be bundle
│   ├── entry.js
│   ├── message.js
│   └── name.js
├── package.json
├── package-lock.json
└── README.md
```
