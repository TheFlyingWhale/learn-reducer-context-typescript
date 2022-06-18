import { extendTheme, useColorModeValue } from '@chakra-ui/react';

export const ColorModeProvider = () => {
	const bgColor = useColorModeValue('gray.50', 'gray.900');
	const secondaryBgColor = useColorModeValue('gray.200', 'gray.800');

	return { bgColor, secondaryBgColor };
};

const theme = extendTheme({
	colors: {
		bg: {
			100: '#E03616',
			900: '#FAA613',
		},
	},
});

export default theme;
