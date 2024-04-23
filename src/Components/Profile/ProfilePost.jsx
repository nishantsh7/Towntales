import { GridItem, Flex, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Box, Avatar, Text, Divider, VStack} from '@chakra-ui/react'
import React from 'react'
import {MdDelete} from "react-icons/md"
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'

const ProfilePost = ({img}) => {
  const { isOpen, onOpen, onClose}= useDisclosure()
  return (<>
    <GridItem cursor={"pointer"} borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"blackAlpha.300"}position={"relative"} aspectRatio={1/1} _hover={{bg:"gray"}} onClick={onOpen}>
      {/* <Flex opacity={0} _hover={{opacity:1}} position={"absolute"} m={0} bg={"whiteAlpha.700"} transition={"all 0.3s ease"} zIndex={1} justifyContent={"center"}> */}
        
          <Image src={img} alt="profile post" w={"100%"} h={"100%"} objectFit={"cover"}></Image>
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl",md:"5xl"}}>
          <ModalOverlay/>
          <ModalContent>
            <ModalCloseButton/>
            <ModalBody bg={'white'} pb={5}>
              <Flex gap={4} w={{base:"100%",sm:"70%",md:"full"}} mx={"auto"}>
                <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"blackAlpha.300"} flex={1.5}>
                  <Image src={img} alt="profile post"/>
                </Box>
                <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}>
                  <Flex alignItems={"center"} justifyContent={"space-between"}>

                  
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src='/Neil.png' size={"sm"} name='Neil'/>
                    <Text fontWeight={"bold"} fontSize={12}>neil</Text>
                  </Flex>
                  <Box _hover={{bg:"blackAlpha.300",color:"red.600"}} borderRadius={4} p={1}><MdDelete size={20} cursor="pointer"/></Box>
                </Flex>
                <Divider my={4} bg={"gray.500"}/>
                <VStack w="full" alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                <Comment 
                createdAt="1d ago"
                username="harshit"
                profilePic="/a1.jpg"
                text={"coool"}/>

                <Comment createdAt="1d ago"
                username="divya"
                profilePic="/a3.png"
                text={"nice one"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>

<Comment 
                createdAt="1d ago"
                username="bhavesh"
                profilePic="/a2.png"
                text={"what a view!!"}/>
                </VStack>
                <PostFooter isProfilePage={true}/>
              </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>

        </Modal>
        </>
  )
}

export default ProfilePost;