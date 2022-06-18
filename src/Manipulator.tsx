import React from 'react';
import { ContextUse } from './context/Context';
import { Flex, Heading, Button, Input, FormLabel } from '@chakra-ui/react';

const Manipulator = ({ secondaryBgColor }: { secondaryBgColor: string }) => {
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
		target.name.value = '';
		setName(name);
	};

	return (
		<Flex
			bg={secondaryBgColor}
			p={50}
			flexDirection="column"
			gap={15}
			borderRadius={12}
		>
			<Heading>Manipulator</Heading>
			<form onSubmit={handleName}>
				<FormLabel
					style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
				>
					Name:
					<Input variant="outlined" placeholder="Ole" type="text" name="name" />
					<Button colorScheme="gray" type="submit">
						Submit
					</Button>
				</FormLabel>
			</form>
		</Flex>
	);
};

export default Manipulator;
