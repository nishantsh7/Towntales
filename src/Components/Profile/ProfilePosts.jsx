import { Box, Grid, Skeleton, VStack } from '@chakra-ui/react'
import React, { useEffect, useState} from 'react'
import ProfilePost from './ProfilePost'

const ProfilePosts = () => {
  const [isLoading,setLoading] = useState(true)


  useEffect(()=>
  {
    setTimeout(()=>{
      setLoading(false)
    },1000)
  },[])
  return (
    <Grid templateColumns={{sm:"repeat(1,1fr)",md:"repeat(3,1fr)",}}
    gap={1}
    columnGap={1}>
      {isLoading && [0,1].map((_,idx)=>(
        <VStack key={idx} alignItems={"flex-start"} gap={4}>
          <Skeleton w={"full"}>
            <Box h='300px'>contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}

      {!isLoading &&(<>
      <ProfilePost img="/post1.jpeg"/>
      <ProfilePost img="/img2.png"/>
      </>
      )}
    </Grid>
  );
};

export default ProfilePosts;