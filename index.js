var live = require('glslify-live')

//get a shader
var glslify = require('glslify')
var createShader = glslify({
    fragment: './shaders/blend.frag',
    vertex: './shaders/blend.vert'
})

//create our WebGL test example
var app = require('./scene')({
    shader: createShader
})

//add to DOM
require('domready')(function() {
    var gl = app.gl
    document.body.style.margin = '0'
    document.body.appendChild(gl.canvas)
})

//re-render canvas whenever shader changes
live.on('update', function(filename, id) {
    app.render()
})