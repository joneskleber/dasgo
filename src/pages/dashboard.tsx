import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { Header } from '../components/Header/index';
import { SideBar } from '../components/Sidebar';

// importar o componente somente do lado do browser
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false, // o Server Side Rendering está desligado com a propriedade false
})


// variáveis do gráfico
const options = {
  chart: {
    toolbar: {
      show: true, // remove os icons da área do gráfico
    },
     zoom: {
       enabled: true,
    },
    foreColor: theme.colors.gray[500], // pega a cor do chakra para as coordenadas
  },
  grid: {
    show: false, // retira o grid do gráfico
  },
  dataLabels: {
    enabled: false, // remove a label do gráfico
  },
  // stroke: {
  //   curve: 'smooth',
  // },
  tooltip: {
   enabled: false, // para tirar o quadro quando o usuário passa o mouse por cima do gráfico
  },
  // xaxis: {
  //   type: 'datetime',
  //   axisBorder: {
  //     color: theme.colors.gray[600], // borda linha do eixo x
  //   },
  //   axisTicks: {
  //     color: theme.colors.gray[600],
  //   },
  //   categories: [
  //     '2021-03-18T00:00:00.000Z',
  //     '2021-03-19T00:00:00.000Z',
  //     '2021-03-20T00:00:00.000Z',
  //     '2021-03-21T00:00:00.000Z',
  //     '2021-03-22T00:00:00.000Z',
  //     '2021-03-23T00:00:00.000Z',
  //     '2021-03-24T00:00:00.000Z',
  //   ]
  // },
  fill: {            // propriedade do preenchimento do gráfico
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }  
};

const series = [
  { name: 'series1',
    data: [31, 120, 10, 28, 61, 18, 109]
  }
]

export default function Dashboard() {
  return (
    // 100vh é a altura toda da tela
    <Flex direction="column" h="100vh">
      <Header />
      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
      >
         <SideBar />

         <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
            <Box
              p={["3", "6"]}
              bg="gray.800"
              borderRadius={8}   
              pb="4"  
            >
              <Text  fontSize="lg" mb="4">Inscritos da semana</Text>
              <Chart 
                options={options}
                series={series}
                type="area"
                height={160}
              />
            </Box>

            <Box
              p={["3", "6"]}
              bg="gray.800"
              borderRadius={8}    
              pb="4"                 
            >
              <Text  fontSize="lg" mb="4">Taxa de abertura</Text>
              <Chart 
                options={options}
                series={series}
                type="area"
                height={160}
              />
     
            </Box>


         </SimpleGrid>
          
          
      </Flex>
    </Flex>
  );
}