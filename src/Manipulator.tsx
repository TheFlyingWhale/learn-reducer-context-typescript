import React from 'react';
import { useContext } from './context/Context';
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
	Select,
} from '@chakra-ui/react';
import { ColorModeProvider } from './theme';

const Manipulator = () => {
	return (
		<>
			<UserManipulator />
			<FriendsManipulator />
		</>
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
			{type !== 'select' ? (
				<Input
					variant="outlined"
					placeholder={placeholder}
					type={type}
					name={name}
					min={min}
					max={max}
					style={{ ...inputStyle }}
					size="lg"
					required
				/>
			) : (
				<Select
					variant="outlined"
					size="lg"
					name={name}
					placeholder={placeholder}
				>
					<option value="friend">Friend</option>
					<option value="enemy">Enemy</option>
				</Select>
			)}
			<FormHelperText>{helperText}</FormHelperText>
		</FormLabel>
	);
};

const UserManipulator = () => {
	const { secondaryBgColor } = ColorModeProvider();
	const { state, commands } = useContext();
	const {
		setUserName,
		setUserSurName,
		setUserAge,
		setUserLocation,
		setUserImage,
	} = commands;

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

		setUserName(name);
		setUserSurName(surname);
		setUserAge(age);
		setUserLocation(location);
		target.image.files[0] && setUserImage(image);
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
								required={true}
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

const FriendsManipulator = () => {
	const { secondaryBgColor } = ColorModeProvider();

	const {
		commands: { addFriend },
	} = useContext();

	const handleSubmit = (e: React.SyntheticEvent) => {
		e.preventDefault();
		const target = e.target as typeof e.target & {
			name: { value: string };
			surname: { value: string };
			age: { value: number };
			relation: { value: 'friend' | 'enemy' | undefined };
			image: { files: Blob[] };
		};
		const name = target.name.value;
		const surname = target.surname.value;
		const age = target.age.value;
		const relation = target.relation.value;
		const image =
			target.image.files[0] && URL.createObjectURL(target.image.files[0]);
		addFriend({
			name: name,
			surname: surname,
			age: age,
			relation: relation,
			image: image,
		});
	};

	return (
		<Flex
			bg={secondaryBgColor}
			p={50}
			flexDirection="column"
			gap={15}
			borderRadius={12}
		>
			<Heading>Add a friend</Heading>
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
								label="Relation:"
								placeholder="- Select option -"
								type="select"
								name="relation"
								helperText="Whats your relation?"
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
