import "./Counter.css";
import ButtonCD from "./Buttons/ButtonCD";
import ButtonCU from "./Buttons/ButtonCU";
import ButtonClear from "./Buttons/ButtonClear";

import { useState } from "react";

const Counter = () => {
	let [count, setCount] = useState(0);

	const CountUp = () => count < 10 && setCount(++count)
	const CountDown = () => count > 0 && setCount(--count)
	const CountClear = () => setCount((count = 0));

	return (
		<div className='counter'>
			<h1 onClick={CountUp}>Counter</h1>
			<h3>Count: {count}</h3>
			<ButtonCU btnClick={CountUp} />
			<ButtonCD btnClick={CountDown} />
			<ButtonClear btnClick={CountClear} />
		</div>
	);
};

export default Counter;
