/** @jsx h */
/** @jsxFrag Fragment */
import { ComponentChildren, Fragment, h } from "preact";
import { tw } from "@twind";

export function Layout({ children }: { children: ComponentChildren }) {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/daisyui@2.17.0/dist/full.css"
        rel="stylesheet"
        type="text/css"
      />

      <div
        class={tw`flex flex-col justify-center items-center w-full h-screen`}
      >
        {children}
      </div>
    </>
  );
}
