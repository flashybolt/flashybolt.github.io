/// <reference types="astro/client" />
declare global {
    namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
        // Add types for HTML elements used in your JSX
        i: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
        button: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      }
    }
  }