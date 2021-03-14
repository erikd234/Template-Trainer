declare module 'canvasjs' {
  export interface CanvasJS {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }
  export function parse(url: string, queryString?: string): CanvasJS;
}
