export const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uHover;

  varying vec2 vUv;
  varying vec3 vViewPosition;

  vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
             -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;

    float gridScale = 26.0;
    vec2 grid = fract(uv * gridScale) - 0.5;
    float ridge = 1.0 - abs(grid.x) * 2.0;
    ridge = pow(clamp(ridge, 0.0, 1.0), 1.5);

    float n = snoise(uv * 6.0 + uTime * 0.05) * 0.5
            + snoise(uv * 18.0 - uTime * 0.08) * 0.25;

    float dist = distance(uv, uMouse);
    float hoverFalloff = smoothstep(0.16, 0.0, dist) * uHover;

    float displacement = ridge * (0.06 + n * 0.03)
                        + hoverFalloff * ridge * 0.22
                        + n * 0.02;

    vec3 pos = position;
    pos.z += displacement + hoverFalloff * 0.05;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const fragmentShader = /* glsl */ `
  uniform vec3 uColorBase;
  uniform vec3 uColorAccent;
  uniform vec2 uMouse;
  uniform float uHover;

  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vec3 fdx = dFdx(vViewPosition);
    vec3 fdy = dFdy(vViewPosition);
    vec3 normal = normalize(cross(fdx, fdy));

    vec3 lightDir = normalize(vec3(0.3, 0.4, 1.0));
    float diffuse = clamp(dot(normal, lightDir), 0.0, 1.0);

    float dist = distance(vUv, uMouse);
    float glow = smoothstep(0.2, 0.0, dist) * uHover;

    vec3 color = uColorBase + diffuse * 0.06;
    color = mix(color, uColorAccent, clamp(diffuse * glow * 1.1, 0.0, 1.0));
    color += uColorAccent * glow * 0.04;

    gl_FragColor = vec4(color, 1.0);
  }
`;
