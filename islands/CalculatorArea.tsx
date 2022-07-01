/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Layout } from "../components/Layout.tsx";
import Card from "../components/Card.tsx";
import { useState } from "https://esm.sh/v86/preact@10.8.1/deno/hooks.js";

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

export default function CalculatorArea() {
  const [scoreTotal, setScoreTotal] = useState(0);

  return (
    <div className={tw`grid justify-items-center`}>
      <h1>{scoreTotal}</h1>
      <div className={tw`flex flex-wrap md:space-x-5 space-x-4 mx-5`}>
        {count.map((x) => (
          <Card
            onClick={(x) => setScoreTotal(scoreTotal + x.value)}
            value={x.value}
            name={x.name}
          />
        ))}
      </div>
    </div>
  );
}
