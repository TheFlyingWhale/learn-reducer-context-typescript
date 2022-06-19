import React from "react";
import { ContextUse } from "./context/Context";
import {
    Flex,
    Heading,
    Text,
    VStack,
    Image,
    Grid,
    GridItem,
} from "@chakra-ui/react";
import { ColorModeProvider } from "./theme";
import { Friend } from "./context/Context";

const Display = () => {
    const { state } = ContextUse();
    const { name, surname, age, location, image } = state.user;
    const { secondaryBgColor } = ColorModeProvider();

    return (
        <>
            <Flex
                bg={secondaryBgColor}
                p={50}
                flexDirection="column"
                borderRadius={12}
                gap={15}
            >
                <Heading as="h2">Profile</Heading>
                <UserDisplay
                    image={image}
                    name={name}
                    surname={surname}
                    age={age}
                    location={location}
                />
            </Flex>
            <FriendsDisplay friends={state.friends} />
        </>
    );
};

export default Display;

const DisplayItem = ({
    title,
    content,
    image,
    alt,
}: {
    title: string;
    content?: string | number;
    image?: string;
    alt?: string;
}) => {
    return (
        <VStack p={0} m={0} alignItems="start">
            <Heading as="h3" size="sm">
                {title}
            </Heading>
            {image ? (
                <Image
                    src={image}
                    borderRadius="full"
                    boxSize="100px"
                    alt={alt}
                    style={{ objectFit: "cover" }}
                />
            ) : (
                <Text>{content === 0 ? "" : content}</Text>
            )}
        </VStack>
    );
};

const UserDisplay = ({
    image,
    name,
    surname,
    age,
    location,
}: {
    image: string;
    name: string;
    surname: string;
    age: number;
    location: string;
}) => {
    return (
        <Grid
            m={0}
            p={0}
            templateColumns="repeat(3, 1fr)"
            templateRows="repeat(2, 1fr)"
        >
            <GridItem rowSpan={2} colSpan={1}>
                <DisplayItem
                    title="Image:"
                    image={image}
                    alt={`${name} ${surname}`}
                />
            </GridItem>
            <DisplayItem title="Name:" content={name} />
            <DisplayItem title="Surname:" content={surname} />
            <DisplayItem title="Age:" content={age} />
            <DisplayItem title="Location:" content={location} />
        </Grid>
    );
};

const FriendsDisplay = ({ friends }: { friends: Friend[] }) => {
    const { secondaryBgColor } = ColorModeProvider();
    if (friends.length > 1) {
        return (
            <Flex
                bg={secondaryBgColor}
                p={50}
                flexDirection="column"
                borderRadius={12}
                gap={15}
            >
                <Heading as="h2">Friends</Heading>
                <VStack gap={30}>
                    {friends.map(({ image, name, surname, age, relation }) => (
                        <FriendItem
                            key={name + surname + age}
                            image={image}
                            name={name}
                            surname={surname}
                            age={age}
                            relation={relation}
                        />
                    ))}
                </VStack>
            </Flex>
        );
    } else {
        return <></>;
    }
};

const FriendItem = ({ image, name, surname, age, relation }: Friend) => {
    if (name) {
        return (
            <Grid
                w="full"
                m={0}
                p={15}
                borderRadius={12}
                templateColumns="repeat(3, 1fr)"
                templateRows="repeat(2, 1fr)"
                bg="gray.300"
            >
                <GridItem rowSpan={2} colSpan={1}>
                    <DisplayItem
                        title="Image:"
                        image={image}
                        alt={`${name} ${surname}`}
                    />
                </GridItem>
                <DisplayItem title="Name:" content={name} />
                <DisplayItem title="Surname:" content={surname} />
                <DisplayItem title="Age:" content={age} />
                <DisplayItem title="Relation:" content={relation} />
            </Grid>
        );
    } else {
        return <></>;
    }
};
