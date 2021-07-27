import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';
import { Input as ChakraInput, InputProps as ChakraInputProps, FormControl, FormLabel } from '@chakra-ui/react';

interface InputProps  extends ChakraInputProps {
  name: string;
  label?: string;  
};

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label, ...rest }, ref ) => {
  return (
    <FormControl>
    { !!label && <FormLabel htmlFor={name}>{label}</FormLabel> }
    
    <ChakraInput 
      name={name}
      id={name}
      focusBorderColor="blue.500"
      bgColor="gray.900"     
      variant="filled"
      _hover={{
        bgColor: 'gray.900'
      }} 
      size="lg"   
      ref={ref}
      {...rest}
      // placeholder="Email" 
    />
  </FormControl>

  );
}

export const Input = forwardRef(InputBase);
