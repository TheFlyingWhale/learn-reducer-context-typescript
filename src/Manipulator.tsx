import React from 'react';
import { ContextUse } from './context/Context';
import {
	Flex,
	Heading,
	Button,
	HStack,
	VStack,
	Input,
	FormLabel,
	FormControl,
	FormHelperText,
} from '@chakra-ui/react';
import { ColorModeProvider } from './theme';

const Manipulator = () => {
	const { secondaryBgColor } = ColorModeProvider();

	const {
		commands: { setName, setSurName, setAge, setLocation },
	} = ContextUse();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
			surname: { value: string };
			age: { value: number };
			location: { value: string };
		};
		const name = target.name.value;
		const surname = target.surname.value;
		const age = target.age.value;
		const location = target.location.value;

		setName(name);
		setSurName(surname);
		setAge(age);
		setLocation(location);
	};

	return (
		<Flex
			bg={secondaryBgColor}
			p={50}
			flexDirection="column"
			gap={15}
			borderRadius={12}
		>
			<Heading>Let us get to know you</Heading>
			<form onSubmit={handleSubmit}>
				<FormControl>
					<VStack gap={15}>
						<HStack w="full" gap={15}>
							<FormLabel
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
								m={0}
							>
								Name:
								<Input
									variant="outlined"
									placeholder="John"
									type="text"
									name="name"
								/>
								<FormHelperText>Whats your name?</FormHelperText>
							</FormLabel>
							<FormLabel
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
							>
								Surname:
								<Input
									variant="outlined"
									placeholder="Doe"
									type="text"
									name="surname"
								/>
								<FormHelperText>Whats your surname?</FormHelperText>
							</FormLabel>
						</HStack>
						<HStack w="full" gap={15}>
							<FormLabel
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
								m={0}
							>
								Age:
								<Input
									variant="outlined"
									placeholder="24"
									type="number"
									name="age"
									min={0}
									max={125}
								/>
								<FormHelperText>How old are you?</FormHelperText>
							</FormLabel>
							<FormLabel
								style={{
									display: 'flex',
									flexDirection: 'column',
									width: '100%',
								}}
							>
								Location:
								<Input
									variant="outlined"
									placeholder="London"
									type="text"
									name="location"
								/>
								<FormHelperText>Where do you live?</FormHelperText>
							</FormLabel>
						</HStack>
						<HStack w="full">
							<Button w="full" colorScheme="green" type="submit">
								Submit
							</Button>
						</HStack>
					</VStack>
				</FormControl>
			</form>
		</Flex>
	);
};

export default Manipulator;
