import {Avatar, Box ,Flex , Img, Link, Tooltip, flexbox,Button } from "@chakra-ui/react"
import {Link as RouterLink} from 'react-router-dom';
import {CommentLogo,CreatePostLogo,NotificationsLogo ,SearchLogo, InstagramLogo , InstagramMobileLogo  , EventLogo} from "../../assets/contants";
import useLogout from "../../Hooks/useLogout";
import {AiFillHome} from "react-icons/ai";
import  { BiLogOut } from "react-icons/bi";

const Sidebar = () => {

const sidebarItems = [
{
icon: <AiFillHome  size={25}/>,
text : "Home" ,
Link : "/",

},
{
  icon: <SearchLogo  />,
  text :"Search",  
  },
  {
    icon: <NotificationsLogo  />,
    text :"TravelGenie",
    Link:"travelGenie"
   },
    {
      icon: <EventLogo  />,
      text :"Event",
      },

    {
      icon: <CreatePostLogo  />,
      text :"Create",
    
      },

      {
        icon: <Avatar   size={"sm"} name ='Neil' src='ProfilePic.png'/>,
        text :"Profile" ,
        Link :"profile",

      },
];
const {handleLogout,isLoggingOut} = useLogout();

  return   <Box 
  height={"100vh"}
borderRight ={"1px solid"}
borderColor={"blackAlpha.300"}
py={8}
position={"sticky"}
top={0}
left={0}
px={{base:2,md:4}} > 


<Flex direction={"column"}  gap={10}  w="full" height={"full"}>

<Link to={"/"}   as={RouterLink} p1={2}  display={{base:"none" , md:"block"}} cursor="pointer" w="auto"  h="auto" >
<InstagramLogo />

</Link>
<Flex direction={"column "} gap={5}  cursor={"pointer"}>
{sidebarItems.map((item, index ) => (
  //logout
<Tooltip
key={index}
hasArrow
label={item.text}
placement="right"
m1={1}
openDelay={500}
display={{base:'block' , md:'none'}}
>
<Link
display={"flex"}
to=""
as={RouterLink}
alignitems={"center"}
gap={4}
_hover={{bg:"lightgreen"}}
borderRadius={6}
p={2}
w={{base:"10" , md:"full"}}
>
{item.icon}
<Box display={{base:"none" , md:"block"}} >
  {item.text}
</Box>
</Link>
</Tooltip>
))}
</Flex>
<Tooltip
hasArrow
label={"Logout"}
placement="right"
m1={1}
openDelay={500}
display={{base:'block' , md:'none'}}
>
<Flex 
onClick={handleLogout}
alignitems={"center"}
gap={4}
_hover={{bg:"lightgreen"}}
borderRadius={6}
p={2}
w={{base:"10" , md:"full"}}
mt={'auto'}
justifyContent={{base:"center " , md: "flex-start"}}
>
<BiLogOut size={25} />
<Button variant="ghost" _hover={{bg:"tranparent"}} isLoading={isLoggingOut} display={{base:"none" , md:"block"}} >
  Logout </Button>
</Flex>
</Tooltip>
</Flex>
 </Box>
   

};

export default Sidebar;