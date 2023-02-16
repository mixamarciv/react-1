import React, { forwardRef, useRef, useEffect } from 'react';
import './style.css';

export default function App() {
  return <Host />;
}

function Host() {
  const inpRef = useRef(null);

  let [value, setValue] = React.useState(null);
  const onClick = React.useCallback(() => {
    setValue(inpRef.current === null ? 'null' : inpRef.current?.value);
  }, [inpRef.current]);

  return (
    <MyInput1 type="text" ref={inpRef} onClick={onClick}>
      Hello World! {value}
    </MyInput1>
  );
}

const MyInput1 = (props) => {
  return (
    <>
      <input onClick={() => props.onClick()} />
      {props.children}
    </>
  );
};

const MyInput2 = forwardRef((props, ref) => {
  return (
    <>
      <input ref={ref} onClick={() => props.onClick()} />
      {props.children}
    </>
  );
});
