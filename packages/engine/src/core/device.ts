export async function initDevice(canvas: HTMLCanvasElement) {
  const backend = process.env.NEXT_PUBLIC_RENDER_BACKEND;

  if (backend === "webgpu" && "gpu" in navigator) {
    const adapter = await (navigator as any).gpu.requestAdapter();
    const device = await adapter.requestDevice();
    const context = canvas.getContext("webgpu") as GPUCanvasContext;

    return { backend: "webgpu", device, context };
  }

  // fallback WebGL2
  const gl = canvas.getContext("webgl2") as WebGL2RenderingContext;
  if (!gl) throw new Error("WebGPU/WebGL2 not supported");

  return { backend: "webgl2", device: gl, context: gl };
}
