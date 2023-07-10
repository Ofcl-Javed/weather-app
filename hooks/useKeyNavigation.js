import { useEffect, useRef, useState } from "react";

export default function useKeyNavigation(list) {
  const [selected, setSelected] = useState(0);
  const parentRef = useRef();

  const handleKeydown = (e) => {
    if (!list?.result) return;
    switch (e.code) {
      case "ArrowUp":
        e.preventDefault();
        selected === 0
          ? setSelected(list.result.length - 1)
          : setSelected((prev) => prev - 1);

        break;
      case "ArrowDown":
        e.preventDefault();
        selected === list.result.length - 1
          ? setSelected(0)
          : setSelected((prev) => prev + 1);

        break;
      case "Enter":
        e.preventDefault();
        console.log(list.result[selected]);
        break;
    }
  };

  useEffect(() => {
    parentRef.current?.children[selected].scrollIntoView({
      behavior: "auto",
      block: "nearest",
    });
  }, [selected]);

  const KeyProps = {
    selected,
    onKeyDown: handleKeydown,
    setSelected,
    parentRef,
  };

  return KeyProps;
}
