import { Heading, useColorMode, Button } from '@chakra-ui/react';

const TopMenu = () => {
	const { toggleColorMode } = useColorMode();

	return (
		<>
			<Heading fontSize="xl">React Context and Reducer</Heading>
			<Button onClick={toggleColorMode}>Color Mode</Button>
		</>
	);
};

export default TopMenu;
