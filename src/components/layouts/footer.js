import { Box, Heading, Flex, Text, Button, Image, Center, Stack, Divider, Container } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Container>
            <Divider />
            <Stack
                pt="4"
                pb="4"
                justify="space-between"
                direction={{ base: 'column-reverse', md: 'row' }}
                align="center"
            >
            <Center>
                <Text fontSize="15px" fontWeight="">
                    Made with 
                </Text>
                <Flex>
                    <Box boxSize="10px">
                    </Box>
                    <Box as="a" href="https://nextjs.org/" boxSize="35px">
                        <Image src="/images/nextjs.jpg" borderRadius="full" alt="Next.js" shadow="lg"/>
                    </Box>
                    <Box boxSize="10px">
                    </Box>
                    <Box as="a" href="https://chakra-ui.com/" boxSize="35px">
                        <Image src="/images/chakraui.svg" borderRadius="full" alt="chakra ui" shadow="lg"/>
                    </Box>
                </Flex>
            </Center>
            </Stack>
        </Container>
    )
}