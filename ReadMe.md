<h1>node js example project with typescript</h1>
This project represents an example node js project written in typescript.

<h2>Guide how to integrate typescript in your node js application</h2>

1. Install typescript globally in order to use tsc command:

```
npm install typescript -g
```

2. Init nodejs project

```
npm init

```

3. Install dev dependencies:

~~~
npm install -D nodemon typescript tslint @types/node jest ts-jest @types/jest
~~~

4. Configure typescript compiler
~~~
## create initial typescript compiler config file:
tsc --init

## set the following properties in the created tsc --init file:

{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
~~~