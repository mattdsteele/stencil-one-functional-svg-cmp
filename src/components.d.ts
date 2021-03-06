/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { JSX } from '@stencil/core';


export namespace Components {
  interface SvgSample {}
}

declare namespace LocalJSX {
  interface SvgSample extends JSXBase.HTMLAttributes {}

  interface ElementInterfaces {
    'SvgSample': Components.SvgSample;
  }

  interface IntrinsicElements {
    'SvgSample': LocalJSX.SvgSample;
  }
}
export { LocalJSX as JSX };

declare module "@stencil/core" {
  export namespace JSX {
    interface ElementInterfaces extends LocalJSX.ElementInterfaces {}
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

declare global {


  interface HTMLSvgSampleElement extends Components.SvgSample, HTMLStencilElement {}
  var HTMLSvgSampleElement: {
    prototype: HTMLSvgSampleElement;
    new (): HTMLSvgSampleElement;
  };
  interface HTMLElementTagNameMap {
    'svg-sample': HTMLSvgSampleElement
  }

  interface ElementTagNameMap {
    'svg-sample': HTMLSvgSampleElement;
  }
}

