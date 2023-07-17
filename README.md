# react-component-library-template

### Typescript Rollup Config

```ts
{
    /* Rollup TS Config */
    "jsx": "react", // converts react components into react.createElement()
    "module": "ESNext", // target esm version
    "declaration": true, // creates .d.ts files to export types along side js files
    "declarationDir": "types", // name of the types directory
    "sourceMap": true, // enables mappings to the line numbers in the ts files, from the generated js files for easy debugging
    "outDir": "dist", // outputs the compiled code
    "moduleResolution": "node", // the resolution algorythm used for resolving imports
    "allowSyntheticDefaultImports": true, // what to do when we don't have default exports
    "emitDeclarationOnly": true, // use ts to only bundle type files. We want rollup to take care of the js files
}
```

### Setup Rollup

```cmd
npm i @rollup/plugin-node-resolve @rollup/plugin-commonjs @rollup/plugin-typescript rollup-plugin-dts --save-dev
``
```
