/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Layout } from "../components/Layout.tsx";
import Card from "../components/Card.tsx";
import { useState } from "https://esm.sh/v86/preact@10.8.1/deno/hooks.js";
import CalculatorArea from "../islands/CalculatorArea.tsx";

const count = [
  {
    name: "Easy",
    value: 3,
  },
  {
    name: "Easy",
    value: 3,
  },
  {
    name: "Easy",
    value: 3,
  },
];

export default function Home() {
  const [scoreTotal, setScoreTotal] = useState(0);

  return (
    <Layout>
      <div class={tw`bg-base-100 p-4 mx-auto max-w-screen-md`}>
        <h1 class={tw`text-xl leading-tight`}>Planning Poker 🧮</h1>
        <p class={tw`my-6 font-medium`}>
          Dead simple AGILE planning poker calculator
        </p>
        <CalculatorArea />
      </div>
    </Layout>
  );
}
