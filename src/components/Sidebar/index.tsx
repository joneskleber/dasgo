import { Box, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, DrawerCloseButton, useBreakpointValue, DrawerBody } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { SideBarNav } from "./SidebarNav";

export function SideBar() {
  const { isOpen, onClose} = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({
    base:true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay  maxHeight="99vh">
          <DrawerContent bg="gray.800" p="4"  maxHeight="98vh" >
            <DrawerCloseButton mt="6" />
              <DrawerHeader>Navegação</DrawerHeader>
              <DrawerBody>
                <SideBarNav />
              </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }

  return (
    <Box as="aside"  w="64" mr="8">
      <SideBarNav />
    </Box>
  );
}