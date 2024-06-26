import {
	Avatar,
	Button,
	Center,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { auth } from "../../FireBase/FireBase";
import useAuthStore from "../../Store/AuthStore";

const EditProfile = ({ isOpen, onClose }) => {
	const handleEditProfile = ()=> {
		console.log(inputs)
	} 
	const authUser = useAuthStore((state)=> state.user)
	const [inputs,setInputs]= useState({fullName:'',username:''})
	const fileRef = useRef(null)
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg={"white"} boxShadow={"xl"} border={"1px solid gray"} mx={3}>
					<ModalHeader />
					<ModalCloseButton />
					<ModalBody>
						{/* Container Flex */}
						<Flex bg={"black"}>
							<Stack spacing={4} w={"full"} maxW={"md"} bg={"white"} p={6} my={0}>
								<Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
									Edit Profile
								</Heading>
								<FormControl>
									<Stack direction={["column", "row"]} spacing={6} >
										<Center>
											<Avatar size='xl' src={""} border={"2px solid white "} />
										</Center>
										<Center w='full'>
											<Button w='full' onClick={()=>fileRef.current.click()}> Edit Profile Picture</Button>
										</Center>
										<Input type='file' hidden ref={fileRef}/>
									</Stack>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Full Name</FormLabel>
									<Input value={inputs.fullName || authUser.fullName} placeholder={"Full Name"} size={"sm"} type={"text"} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}/>
								</FormControl>

								<FormControl>
									<FormLabel fontSize={"sm"}>Username</FormLabel>
									<Input value={inputs.username || authUser.username} placeholder={"Username"} size={"sm"} type={"text"} onChange={(e) => setInputs({ ...inputs, username: e.target.value })} />
								</FormControl>

								<Stack spacing={6} direction={["column", "row"]}>
									<Button
										bg={"red.400"}
										color={"white"}
										w='full'
										size='sm'
										_hover={{ bg: "red.500" }}
										onClick={onClose}
									>
										Cancel
									</Button>
									<Button
										bg={"blue.400"}
										color={"white"}
										size='sm'
										w='full'
										_hover={{ bg: "blue.500" }}
										onClick={handleEditProfile}
									>
										Submit
									</Button>
								</Stack>
							</Stack>
						</Flex>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	);
};

export default EditProfile;