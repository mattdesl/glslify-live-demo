float vignette(vec2 uv, float a, float b) {
    float len = length(uv - 0.5);
    return smoothstep(a, b, len);
}

#pragma glslify: export(vignette)