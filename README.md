# glslify-live-demo

[![img](http://i.imgur.com/avt4SIt.jpg)](https://www.youtube.com/watch?v=Bbb2sFH5yf8)

[(click for a screencast example)](https://www.youtube.com/watch?v=Bbb2sFH5yf8)

An example project for using [glslify-live](https://github.com/hughsk/glslify-live).

1. git clone `https://github.com/mattdesl/glslify-live-demo.git`
2. `cd glslify-live-demo`
3. `npm install` the dependencies
4. Then `npm start` to run the dev server

Open `localhost:9966` in your browser and start making changes to the files in the [shaders/](shaders/) folder.

If you are on windows, you may need to manually run the two processes as separate processes:

```sh
#dev server
npm run dev

#glslify-live server
npm run live
```

## how to

To do this on your own Browserify projects, you need to install some local tools:

```npm install glslify glslify-live --save-dev```

And add some scripts to your package.json:

```json
  "scripts": {
    "bundle": "browserify index.js -t glslify-live -t glslify > bundle.js",
    "live": "glslify-live"
  }
```

Could be used with wzrd, beefy, gulp, grunt, etc. 

## limitations

This is in early stages and fairly experimental. You might sometimes need to re-run the process (syntax errors can crash the server). And glslify does not yet provide the best debugging experience. 

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/glslify-live-demo/blob/master/LICENSE.md) for details.
