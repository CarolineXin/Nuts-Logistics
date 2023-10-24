import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "汀汀汀·汀汀",
          "阿祖尔",
          "纳撒尼尔·角鸦",
          "安缇诺雅",
          "扎希尔·莱恩",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
