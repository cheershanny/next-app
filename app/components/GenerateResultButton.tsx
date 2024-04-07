"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const GenerateResultButton = () => {
  const [name, setName] = useState<string>("");
  const router = useRouter();

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="btn" onClick={() => router.push(`name/${name}`)}>
        Generate!
      </button>
    </div>
  );
};

export default GenerateResultButton;
