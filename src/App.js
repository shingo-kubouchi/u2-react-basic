import { useCallback, useMemo, useState } from "react";
import { ChileArea } from "./ChildArea";
import { CssModules } from "./component/CssModules";
import { Emotion } from "./component/Emotion";
import { InlineStyle } from "./component/InlineStyle";
import { StyledComponents } from "./component/StyledComponents";
import { StyledJsx } from "./component/StyledJsx";
import "./styles.css";

export default function App() {
  // const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>カウントアップ</button>
      <br /> */}

      <input calue={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <br />
      <button onClick={() => setOpen(!open)}>表示</button>
      <ChileArea
        open={open}
        onClickClose={useCallback(() => setOpen(false), [setOpen])}
      />
      <InlineStyle />
      <CssModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
