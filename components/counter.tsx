"use client";

import { useState } from "react";
import { Button } from "./ui/button";

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <Button variant="outline" onClick={increment}>
      {counter}
    </Button>
  );
};

export default Counter;
