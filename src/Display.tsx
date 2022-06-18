import React from 'react';
import { ContextUse } from './context/Context';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { ColorModeProvider } from './theme';

const Display = () => {
	const { state } = ContextUse();
	const { name, surname, age, location } = state;
	const { secondaryBgColor } = ColorModeProvider();

	return (
		<Flex
			bg={secondaryBgColor}
			p={50}
			flexDirection="column"
			gap={15}
			borderRadius={12}
		>
			<Heading>Profile</Heading>
			<Text>Name: {name}</Text>
			<Text>Surname: {surname}</Text>
			<Text>Age: {age === 0 ? '' : age}</Text>
			<Text>Location: {location}</Text>
		</Flex>
	);
};

export default Display;
