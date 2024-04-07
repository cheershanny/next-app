import React from "react";

interface Props {
  params: { slug: string };
}

interface LetterValues {
  [letter: string]: number;
}

const NameResult = ({ params: { slug } }: Props) => {
  const letterValues: LetterValues = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 1,
    k: 2,
    l: 3,
    m: 4,
    n: 5,
    o: 6,
    p: 7,
    q: 8,
    r: 9,
    s: 1,
    t: 2,
    u: 3,
    v: 4,
    w: 5,
    x: 6,
    y: 7,
  };
  const refinedName = slug.replace(/%20/g, " ");
  console.log(refinedName);
  const nameArray = refinedName.toLowerCase().split("");
  console.log(nameArray);

  return (
    <div>
      <h2>
        Your name is:{" "}
        <span className="underline underline-offset-4">{refinedName}</span>
      </h2>
      <ul>
        {nameArray.map((letter, index) =>
          letter === " " ? null : (
            <li key={index}>
              {letter}: {letterValues[letter]}
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default NameResult;
