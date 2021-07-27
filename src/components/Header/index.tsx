import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SideBarDrawerContext';
import { Logo } from './Logo';
import { NotificationsNav } from './NotificationsNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  const { onOpen } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Flex
      as="header"
      w="100%"
      h="20" // é o espaçamento do chakra
      maxWidth={1480}
      mx="auto" // margem horizontal
      mt="4" // margem top
      px="6" // padding: 24px
      align="center"
      borderBottom="1px"         
    >

      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as ={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>  
      )
      }



      <Logo />

      { isWideVersion && <SearchBox /> }

      <Flex align="center" margin="auto" >
        <NotificationsNav />
        <Profile showProfileData={isWideVersion} />    
      </Flex>  
      
    </Flex>
  );
}