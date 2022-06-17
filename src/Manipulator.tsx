import React from 'react';
import { ContextUse } from './Context';

const Manipulator = () => {
	const {
		commands: { setName },
	} = ContextUse();

	const handleName = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
			password: { value: string };
		};
		const name = target.name.value;
		setName(name);
	};

	return (
		<>
			<form onSubmit={handleName}>
				<label>
					Name:
					<input type="text" name="name" />
					<button type="submit">Submit</button>
				</label>
			</form>
		</>
	);
};

export default Manipulator;
