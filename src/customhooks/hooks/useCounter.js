import { useState } from "react";

const useCounter = (
  initialValue = 0,
  incrementValue = 1,
  decrementValue = 1
) => {
  const [counter, setCounter] = useState(initialValue);
  const incerement = () => setCounter(counter + incrementValue);
  const decerement = () => setCounter(counter - decrementValue);
  const reset = () => setCounter(0);

  return [counter, incerement, decerement, reset];
};

export default useCounter;

/*

الفكرة العامة ديال Custom Hook:

الهدف:

كتجمع logic اللي كتعاود تستعملها بزاف فـ بزاف ديال components.

logic فيها state, effect, ref ديال React أو أي hooks أصليين.

كيفاش كنخدموها:

كتصايب Custom Hook مرة وحدة، فيها كلشي ديال logic.

كل component اللي بغى هاد logic كيستعمل Custom Hook وكيعطيه غير المعطيات اللي خاصو (parameters / callbacks)

شنو كيعود للcomponent:

state وfunctions references جاهزين باش يستعملهم مباشرة.

component يبقى نظيف: غير يعرض UI ويستعمل hook.


*/
