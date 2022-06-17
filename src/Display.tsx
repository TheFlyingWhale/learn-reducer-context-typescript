import React from 'react';
import { ContextUse } from './Context';

const Display = () => {
	const { state, commands } = ContextUse();

	return <p>Name: {state.name}</p>;
};

export default Display;
