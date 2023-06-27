import { Link } from 'react-router-dom';

import {
    Flex,
    Box,
    Center,
    FormControl,
    Input,
    FormLabel,
    HStack,
    RadioGroup,
    Radio,
    Button,
    Select,
    Textarea,
    Divider,
  } from "@chakra-ui/react";
  
  function Vacina() {
    return (     
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                <FormLabel htmlFor="nasc">Nome da Vacina</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='m'>Vacina antirrábica</option>
                  <option value='a'>Vacina antitetânica </option>
                  <option value='b'>Vacina bouba aviária</option>
                  <option value='b'>Vacina contra brucelose (B19)</option>
                  <option value='m'>Vacina contra circovirose em suínos</option>
                  <option value='a'>Vacina contra clostridiose</option>
                  <option value='b'>Vacina contra coriza infecciosa das aves</option>
                  <option value='b'>Vacina contra doença de marek</option>

                </Select>
                </Box>

                <Box w="100%">
                <FormLabel htmlFor="nasc">Estilo de Aplicação</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='m'>Individual</option>
                  <option value='a'>Grupo</option>
                 

                </Select>
                </Box>


              </HStack>

              <HStack>

                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Data da Aplicação</FormLabel>
                <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>

                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Data de Validade</FormLabel>
                <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>

                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Lote</FormLabel>
                <Input id="lote" />
                </Box>



              </HStack>

              <HStack>

              <Box w="100%">
                  <FormLabel htmlFor="cel">Marcação (Em Caso de lote separar cada marcador por /)</FormLabel>
                  <Textarea placeholder='Digite a descrição aqui' />
                </Box>
                

              </HStack>
  
  
             
            
              
            </FormControl>
       
    );
  }
  
  export default Vacina;
  