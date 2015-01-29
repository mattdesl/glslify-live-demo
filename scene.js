//just a simple test texture being rendered to a
//canvas for now...

var Texture = require('gl-texture2d')
var triangle = require('a-big-triangle')
var xtend = require('xtend')

function create(opt) {
    //grab a test image, rotate it upright
    var texture = require('baboon-image').transpose(1, 0, 2)

    //default options to texture size
    opt = xtend({
        width: texture.shape[0],
        height: texture.shape[1]
    }, opt)

    //get a WebGL context
    var gl = require('webgl-context')(opt)

    //create a WebGL texture from our image
    var tex1 = Texture(gl, texture)

    //create the shader
    var shader = opt.shader(gl)

    //draw the scene initially
    render()
    
    //our little API 
    return {
        gl: gl,
        render: render
    }

    function render() {
        //clear screen & setup viewport
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight)
        gl.clearColor(0, 0, 0, 1)
        gl.clear(gl.COLOR_BUFFER_BIT)

        //bind the shader before changing uniforms
        shader.bind()
        shader.uniforms.colorBuffer = 0

        tex1.bind()
        triangle(gl)
    }
}

module.exports = create