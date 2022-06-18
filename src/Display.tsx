import React from 'react';
import { ContextUse } from './context/Context';
import { Flex, Heading, Text } from '@chakra-ui/react';

const Display = ({ secondaryBgColor }: { secondaryBgColor: string }) => {
	const { state } = ContextUse();

	return (
		<Flex
			bg={secondaryBgColor}
			p={50}
			flexDirection="column"
			gap={15}
			borderRadius={12}
		>
			<Heading>Display</Heading>
			<Text>Name: {state.name}</Text>
		</Flex>
	);
};

export default Display;
