import { Flex, Box, Heading, Button, Icon, Table, Thead, Tr, Th, Td, Checkbox, Tbody, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from '../../components/Header';
import { Pagination } from "../../components/Pagination";
import { SideBar } from '../../components/Sidebar';
import Link from "next/link";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })
  return (
    <Box>
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
        <SideBar />
        <Box flex="1" borderRadius={8} bg="gray.800" p="8">

          <Flex mb="8" justify="space-between" alignItems="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>

            <Link href='/users/create' passHref>
              <Button 
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="blue"
              leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
              >
                  Criar novo usuário
              </Button>
            </Link>

          </Flex>

          {/* Listagem de usuários */}
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="blue" />
                </Th>
                <Th>Usuários</Th>
                { isWideVersion &&  <Th>Data de cadastro</Th> }
                <Th width="8"></Th>
              </Tr>

            </Thead>

            <Tbody>
              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Jones Kleber M. Santos</Text>
                    <Text fontSize="sm" color="gray.300">visao@visao-ol.com.br</Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>25 de Julho de 2021</Td> }
                <Td>
                  <Link href='/users/create' passHref>         
                    <Button 
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    >
                      { isWideVersion ? 'Editar' : ''}    
                    </Button>
                  </Link>

                </Td>
              </Tr>

              <Tr>
                <Td px={["4", "4", "6"]}>
                  <Checkbox colorScheme="blue" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Antonella Bonfort Santos</Text>
                    <Text fontSize="sm" color="gray.300">antonella@visao-ol.com.br</Text>
                  </Box>
                </Td>
                { isWideVersion &&  <Td>25 de Julho de 2021</Td> }
                <Td>
                  <Link href='/users/create' passHref>         
                    <Button 
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16"/>}
                    >
                      { isWideVersion ? 'Editar' : ''}    
                    </Button>
                  </Link>
                </Td>
              </Tr>


              
            </Tbody>
          </Table>
          <Pagination />

        </Box>
      </Flex>   

    </Box>
  );
}