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
	FormHelperText,
	FormControl,
} from '@chakra-ui/react';
import { ColorModeProvider } from './theme';

const Manipulator = () => {
	const { secondaryBgColor } = ColorModeProvider();

	const {
		commands: { setName, setSurName, setAge, setLocation, setImage },
	} = ContextUse();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
			surname: { value: string };
			age: { value: number };
			location: { value: string };
			image: { files: Blob[] };
		};
		const name = target.name.value;
		const surname = target.surname.value;
		const age = target.age.value;
		const location = target.location.value;
		const image =
			target.image.files[0] && URL.createObjectURL(target.image.files[0]);

		setName(name);
		setSurName(surname);
		setAge(age);
		setLocation(location);
		target.image.files[0] && setImage(image);
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
				<VStack gap={30}>
					<HStack w="full" gap={15}>
						<FormControl>
							<FormItem
								label="Image"
								type="file"
								name="image"
								helperText="Please upload a valid image file. Max file size: 1MB"
								inputStyle={{ padding: 0, borderRadius: 0 }}
							/>
						</FormControl>
					</HStack>
					<HStack w="full" gap={15}>
						<FormControl>
							<FormItem
								label="Name:"
								placeholder="John"
								type="text"
								name="name"
								helperText="Whats your name?"
							/>
						</FormControl>
						<FormControl>
							<FormItem
								label="Surname:"
								placeholder="Doe"
								type="text"
								name="surname"
								helperText="Whats your surname?"
							/>
						</FormControl>
					</HStack>
					<HStack w="full" gap={15}>
						<FormControl>
							<FormItem
								label="Age:"
								placeholder="23"
								type="number"
								name="age"
								helperText="How old are you??"
								min={0}
								max={120}
							/>
						</FormControl>
						<FormControl>
							<FormItem
								label="Location:"
								placeholder="London"
								type="text"
								name="location"
								helperText="Where do you live?"
							/>
						</FormControl>
					</HStack>
					<HStack w="full">
						<Button w="full" size="lg" colorScheme="green" type="submit">
							Submit
						</Button>
					</HStack>
				</VStack>
			</form>
		</Flex>
	);
};

export default Manipulator;

const FormItem = ({
	label = 'hello',
	placeholder = 'placeholder',
	type = 'text',
	name = 'name',
	helperText = 'helper text',
	required = false,
	min,
	max,
	inputStyle = {},
}: {
	label: string;
	placeholder?: string;
	type: string;
	name: string;
	helperText: string;
	min?: number;
	max?: number;
	inputStyle?: object;
	required?: boolean;
}) => {
	return (
		<FormLabel
			m={0}
			gap={2}
			style={{
				display: 'flex',
				flexDirection: 'column',
				width: '100%',
			}}
		>
			{label}
			<Input
				variant="outlined"
				placeholder={placeholder}
				type={type}
				name={name}
				min={min}
				max={max}
				style={{ ...inputStyle }}
				size="lg"
			/>
			<FormHelperText>{helperText}</FormHelperText>
		</FormLabel>
	);
};
