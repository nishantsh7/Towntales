import { Avatar, Flex,Box  } from '@chakra-ui/react';
import React from 'react'
import { Tagg } from '../../assets/contants';

const PostHeader = ({location,avatar}) => {
  return (



    <Flex justifyContent={"space-between "}  alignItems={"center"} w={"full"} my={"2"}> 
    <Flex     alignItems={"center"} gap={2}>
         {/* <Avatar  src={avatar} alt="user profile pic"  size={"sm"}/>  */}
        <Flex fontSize={"12px"} fontWeight={"bold"} gap={"2"}>
        {location} 
            <Box color={"gray.500"}>.1W</Box>
            
        </Flex>

    </Flex>   
<Box>
{/* unfollow button will come here  */}
</Box> 
    </Flex>
  )
}

export default PostHeader;