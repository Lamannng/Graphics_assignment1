onload = () => {
  let canvas = document.getElementById("webgl-canvas");

  let gl = WebGLUtils.setupWebGL(canvas);
  if (!gl) {
    alert("Couldn't setup webgl"); 
    return;
  }

  let program = initShaders(gl, "vertex-shader", "fragment-shader");
  gl.useProgram(program);

  let vertices = [-0.25, -0.25, 0.25, -0.25, -0.25, 0.25, 0.25, 0.25];


  let vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  let vPosition = gl.getAttribLocation(program, "vPosition");
  gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vPosition);

  gl.clearColor(0, 1, 1, 1);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, vertices.length / 2);

  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices.length / 2);
};
