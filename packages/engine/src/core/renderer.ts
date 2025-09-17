import { initDevice } from "./device";

export async function startRenderer(canvas: HTMLCanvasElement) {
  const ctx = await initDevice(canvas);

  if (ctx.backend === "webgl2") {
    const gl = ctx.device as WebGL2RenderingContext;
    gl.clearColor(0.1, 0.1, 0.1, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    console.log("WebGL2 Renderer OK");
  }

  if (ctx.backend === "webgpu") {
    console.log("WebGPU Renderer OK");
    // Tambahkan render pipeline di tahap 2
  }
}
