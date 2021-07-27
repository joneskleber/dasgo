import { Flex, Box, Text, Avatar } from "@chakra-ui/react"

interface ProfileProps {
  showProfileData : boolean;
}

export function Profile( { showProfileData } : ProfileProps ) {
  return (
     <Flex align="center">

      {/* Mostra o conteúdo dos dados do perfil somente no computador. */}
      { showProfileData && (
        <Box mr="4" textAlign="right"> 
          <Text>Jones Kleber M. Santos</Text>
          <Text color="gray.300" fontSize="small">visao@visao-ol.com.br</Text>
        </Box>
      )}

      <Avatar size="md" name="Jones Kleber" src="https://github.com/joneskleber.png" />
        
    </Flex>       
  );
}