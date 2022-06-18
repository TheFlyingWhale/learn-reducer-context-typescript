import { Provider } from './context/Context';
import Display from './Display';
import Manipulator from './Manipulator';
import TopMenu from './components/topMenu';
import { VStack, Flex } from '@chakra-ui/react';
import { ColorModeProvider } from './theme';

function App() {
	const { bgColor, secondaryBgColor } = ColorModeProvider();

	return (
		<Provider>
			<VStack w="full" h="full" bg={bgColor} gap={15}>
				<Flex py={4} w="full" bg={secondaryBgColor} justifyContent="center">
					<Flex
						maxWidth={800}
						w="full"
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
					>
						<TopMenu />
					</Flex>
				</Flex>
				<Flex w="full" h="full" justifyContent="center">
					<Flex w="full" maxWidth={800} flexDirection="column" gap={15}>
						<Display />
						<Manipulator />
					</Flex>
				</Flex>
			</VStack>
		</Provider>
	);
}

export default App;
