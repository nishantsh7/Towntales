import React, { useState } from 'react'
import { Flex , Box  ,Text, Button,Avatar} from '@chakra-ui/react'
import { NotificationsLogo, UnlikeLogo , CommentLogo,Tagg } from '../../assets/contants';
import {  Input, InputGroup, InputRightElement,} from '@chakra-ui/react';


const PostFooter = ({username, caption, tag, isProfilePage, avatar }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };     
   return ( <Box mb={10}>
  <Flex alignItems ={"center"} w={"full"}  pt={"0"} mb={"2"} mt={4} >
  <Flex gap={"4"}>
<Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
{!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
</Box>
<Box cursor ={"pointer"} fontSize={18}>
<CommentLogo/>
</Box>
{!isProfilePage && (<>
<Box fontSize={18}>
<Tagg/> 
</Box></>)} </Flex>
<Box fontSize={10} color={"green"}>{tag}</Box>
  </Flex>
  <Text    fontWeight={600} fontSize={"sm"}>
    {likes} likes
  </Text>

  {!isProfilePage && (
  <>
  <Flex gap={2} alignItems={"center"}>
    <Box><Avatar  src={avatar} alt="user profile pic"  size={"sm"}/></Box>
  <Text    fontWeight={700} fontSize={"sm"}>
  {username} {"  "}
  <Text    fontWeight={400} as='span'>
    {caption}
  </Text>
  </Text>
  </Flex>
  
  <Text   color={"gray"} fontSize={"sm"}>
    View all 1,000 comments
  </Text>

  </>)}

<Flex alignItems={"center"}
gap={2}
justifyContent={"space-between"}
w={"fUll"}>
<InputGroup>
<Input  variant={"flushed"} placeholder={"Add a comment..."}  fontSize={"14px"}  / >
<InputRightElement>
<Button fontSize={14} color={"green.500" } fontWeight={600} cursor={"pointer"} _hover={{color:"black"}} bg={"transparent"} >Post


</Button>

</InputRightElement>

</InputGroup>

</Flex>
  </Box>
   
   );
};

export default PostFooter;