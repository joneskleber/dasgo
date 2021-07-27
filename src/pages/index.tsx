import { Flex, Button, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string;
  password: string;  
}

export default function SignIn() {
   const { register, handleSubmit, formState } = useForm();

  // Função para lidar com a autenticação do usuário
  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));


    const errors = formState.errors;
    

    console.log(errors);   
    
  }



  return (
    <Flex  
      w="100vw" 
      h="100vh" 
      align="center" 
      justify="center"
    >
      <Flex 
        as ="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8" // padding => medida do próprio chakra 8=2rem=32px
        borderRadius={8} // 8px
        flexDirection="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            name="email" 
            label="E-mail" 
            type="email"
            {...register("email")}
          />

          <Input 
            name="password" 
            label="Senha"
            type="password" 
            {...register("password")}
          />

        </Stack>       
          <Button 
            as="a" 
            type="submit" 
            mt="6" 
            colorScheme="blue" 
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>


      </Flex>      
    </Flex>

  )
}
