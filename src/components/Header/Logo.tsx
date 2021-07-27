import { Image, Stack, useBreakpointValue } from '@chakra-ui/react';
// import Image from 'next/image';

export function Logo() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })  

    return (


  <Image 
    borderRadius="full"
    src="/images/logovisao.svg" 
    alt="Logo Visão On-line" 
    objectFit="cover"
    //  size="small"
    mr = { isWideVersion && "170"  }
  />




    );


<Image
  borderRadius="full"
  boxSize="150px"
  src="https://bit.ly/sage-adebayo"
  alt="Segun Adebayo"
/>

  }