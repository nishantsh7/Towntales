import { Container, VStack , Flex , SkeletonCircle , Skeleton  ,Box, Input, Button} from '@chakra-ui/react'
import FeedPost from "./FeedPost"


import { useEffect, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi';

const FeedPosts = () => {
 const [isLoading ,setIsLoading] = useState(true);


 useEffect(()  => {
    setTimeout(() => {
        setIsLoading(false)} , 1000)
 }  , [])

  
 
 return (
    <Container maxW={"container.sm" }     py={10}   px={2}>
     <Flex mb={"12"} ><Input focusBorderColor="green.500" borderRadius="50px" placeholder='Just name the tag'></Input>
     <Button color={"black"} _hover={{color:"green.500"}} bg={"transparent"} position={"absolute"} ml={470} borderRightRadius="50px"><BiSearchAlt2/></Button></Flex>
{isLoading && [0,1,2,3].map((_,idx) => (
<VStack key={idx} gap={4 }   alignItems={"flex-start"} md={10}>
<Flex gap="2">
<SkeletonCircle size='10' />
<VStack   gap={2}  alignItems={"flex-start"}>
<Skeleton height='10px' w={"200px"} />

</VStack>
</Flex>

<Skeleton w={"full"} >
<Box h={"500px"} >  contents wrapped   </Box>
</Skeleton>
</VStack>
))}


{!isLoading && (
<>
<FeedPost  img='/post1.jpeg'  username="Neil"  avatar='/a1.jpg' caption="Life is the best in mountains." location="Himachal Pradesh" tag="Mountain"/>
<FeedPost  img='/post2.jpeg'  username="Nish"  avatar='/Nishant.jpg' caption="Stalking through so many windows." location="Hawa Mahal" tag="Monument"/>
<FeedPost  img='/post3.jpeg'  username="GUY28"  avatar='/profile3.jpeg'caption="Garba night" location="Rajkot" tag="Festival"/>
<FeedPost  img='/post4.jpeg'  username="GIRL24"  avatar='/PP3.jpeg' caption="then we were chilling." location="Delhi" tag="Concert"/>
</>
)}
    </Container>
  );

};
export default FeedPosts;