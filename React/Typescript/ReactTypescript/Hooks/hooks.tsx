// UseState

const [state, setState] = useState(false);
// `state` is inferred to be a boolean
// `setState` only takes booleans

const [user, setUser] = useState<User | null>(null);

// later...
setUser(newUser);

const [user, setUser] = useState<User>({} as User);

// later...
setUser(newUser);

//UseCallback

const memoizedCallback = useCallback(
    (param1: string, param2: number) => {
      console.log(param1, param2)
      return { ok: true }
    },
    [...],
  );
  /**
   * VSCode will show the following type:
   * const memoizedCallback:
   *  (param1: string, param2: number) => { ok: boolean }
   */

  function useCallback<T extends (...args: any[]) => any>(
    callback: T,
    deps: DependencyList
  ): T;

  function useCallback<T extends Function>(callback: T, deps: DependencyList): T;

  // @ts-expect-error Parameter 'e' implicitly has 'any' type.
useCallback((e) => {}, []);
// Explicit 'any' type.
useCallback((e: any) => {}, []);

//UseReducer

import { useReducer } from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}

//UseEffect / UseLayoutEffect

function DelayedEffect(props: { timerMs: number }) {
    const { timerMs } = props;
  
    useEffect(
      () =>
        setTimeout(() => {
          /* do stuff */
        }, timerMs),
      [timerMs]
    );
    // bad example! setTimeout implicitly returns a number
    // because the arrow function body isn't wrapped in curly braces
    return null;
  }

  //UseRef

  function Foo() {
    // - If possible, prefer as specific as possible. For example, HTMLDivElement
    //   is better than HTMLElement and way better than Element.
    // - Technical-wise, this returns RefObject<HTMLDivElement>
    const divRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      // Note that ref.current may be null. This is expected, because you may
      // conditionally render the ref-ed element, or you may forget to assign it
      if (!divRef.current) throw Error("divRef is not assigned");
  
      // Now divRef.current is sure to be HTMLDivElement
      doSomethingWith(divRef.current);
    });
  
    // Give the ref to an element so React can manage it for you
    return <div ref={divRef}>etc</div>;
  }

  const divRef = useRef<HTMLDivElement>(null!);
// Later... No need to check if it is null
doSomethingWith(divRef.current);

function Foo() {
    // Technical-wise, this returns MutableRefObject<number | null>
    const intervalRef = useRef<number | null>(null);
  
    // You manage the ref yourself (that's why it's called MutableRefObject!)
    useEffect(() => {
      intervalRef.current = setInterval(...);
      return () => clearInterval(intervalRef.current);
    }, []);
  
    // The ref is not passed to any element's "ref" prop
    return <button onClick={/* clearInterval the ref */}>Cancel timer</button>;
  }

  //UseImperativeHandle

  // Countdown.tsx

// Define the handle types which will be passed to the forwardRef
export type CountdownHandle = {
    start: () => void;
  };
  
  type CountdownProps = {};
  
  const Countdown = forwardRef<CountdownHandle, CountdownProps>((props, ref) => {
    useImperativeHandle(ref, () => ({
      // start() has type inference here
      start() {
        alert("Start");
      },
    }));
  
    return <div>Countdown</div>;
  });

  // The component uses the Countdown component

import Countdown, { CountdownHandle } from "./Countdown.tsx";

function App() {
  const countdownEl = useRef<CountdownHandle>(null);

  useEffect(() => {
    if (countdownEl.current) {
      // start() has type inference here as well
      countdownEl.current.start();
    }
  }, []);

  return <Countdown ref={countdownEl} />;
}

//Custom hooks

import { useState } from "react";

export function useLoading() {
  const [isLoading, setState] = useState(false);
  const load = (aPromise: Promise<any>) => {
    setState(true);
    return aPromise.finally(() => setState(false));
  };
  return [isLoading, load] as const; // infers [boolean, typeof load] instead of (boolean | typeof load)[]
}