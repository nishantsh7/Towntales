import React from 'react'
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import {Box , Image} from '@chakra-ui/react';

const FeedPost = ({img , username , avatar, caption, location, tag}) => {
  return( <>
    <PostHeader username={username} avatar={avatar} location={location}/>
    <Box my={2} borderRadius={4}
    overflow={'hidden'}>
<Image src = {img} alt='username'/>


    </Box>
    <PostFooter username={username} caption={caption} tag={tag}/>
  </>
  );
};

export default FeedPost;