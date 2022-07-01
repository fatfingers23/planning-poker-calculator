/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface CardProps {
  name: string;
  value: number;
}

export default function Card(props: CardProps) {
  // const [count, setCount] = useState(props.start);
  const btn = tw`pt-2 px-2 border(gray-100 1) hover:bg-gray-200 shadow-lg`;
  return (
    <div className={tw`card  bg-base-300 shadow-xl text-center my-3`}>
      <div className="card-body">
        <h2 className="card-title">{props.name}</h2>
        <p>{props.value}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
