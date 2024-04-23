import { Container, Flex, VStack, Box, Image } from "@chakra-ui/react";
 import AuthForm from "../../Components/Authform/AuthForm"

const AuthPage = () => {
	return (
        
		<Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
			<Container maxW={"container.md"} padding={0}>
				<Flex justifyContent={"center"} alignItems={"center"} gap={10}>
					{/* Left hand-side */}
					<Box display={{ base: "none", md: "block" }}>
						<Image src='https://i.pinimg.com/564x/f2/01/f7/f201f7d56e98fd38e122e04c2854e574.jpg' h={650}  alt='Phone img' />
					</Box>

					{/* Right hand-side */}
					<VStack spacing={4} align={"stretch"}>
						<AuthForm />
						<Box textAlign={"center"}>Get the app.</Box>
						<Flex gap={5} justifyContent={"center"}>
                        <Image src='/playstore.png' h={"10"} alt='Playstore logo' />
							<Image src='/microsoft.png' h={"10"} alt='Microsoft logo' />
						</Flex>
					</VStack>
				</Flex>
			</Container>
		</Flex>
	);
};

export default AuthPage;
