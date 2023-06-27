import { Button, Form, Input } from "antd";

import MenuPage from "../../components/Menu";

import styles from "./Atendimento.module.css";

import Api from "../../Api/Api";



import {
  Flex,
  Box,
  Center,
  FormControl,
  FormLabel,
  HStack,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Divider,
  useStatStyles,
} from "@chakra-ui/react";
import { useState } from "react";

const Atendimento = () => {

  const [Busca_animal,setBusca_animal] = useState({

    tipo:'',
    marcacao:'',

  })

const handleBusca_tipoEdit=(event,tipo)=>{
  setBusca_animal({
    ...Busca_animal,
    [tipo]: event.target.value
    

  })
}

const handleBusca_marcacaoEdit=(event,marcacao)=>{
  setBusca_animal({
    ...Busca_animal,
   
    [marcacao]: event.target.value

  })
}


const handleBusca_animal= async(event)=>{
   
  try{
        event.preventDefault()

        
        const response = await fetch('../../Api/Api/',{
        method: 'POST',
        body: JSON.stringify(Busca_animal)
  })

  const json = await response.json()
  console.log(response.status)
  console.log(json)

  }catch(err)  {

  }
}




  return (
    <div className={styles.register}>
      <MenuPage />



      <div className={styles.containerRegister}>
     
      <Box h="500vh">
        <Center
          as="header"
          h={100}
          bg="teal.500"
          color="white"
          fontWeight="bold"
          fontSize="5xl"
          pb="15"
          w="100%"
          
          
        >
          Formulário de Atendimento Animal
        </Center>
        <Flex
          align="center"
          justify="center"
          bg="blackAlpha.200"
          h="calc(100vh - 150px)"
        >
          <Center
            w="100%"
            maxW={900}
            bg="white"
            top={100}
            position="absolute"
            borderRadius={5}
            p="6"
            boxShadow="0 1px 2px #ccc"
          >
            <FormControl display="flex" flexDir="column" gap="4">
              <HStack spacing="4">
                <Box w="100%">
                <FormLabel htmlFor="nasc">Tipo de Marcação</FormLabel>
                  <Select placeholder='Selecione a opção' requerid value={Busca_animal.tipo} onChange={(e)=>{handleBusca_tipoEdit(e,'tipo')}}>
                  <option value='m'>Microchip</option>
                  <option value='a'>Anilha</option>
                  <option value='b'>Brinco</option>
                  
                </Select>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="marcacao">Marcação</FormLabel>
                  <Input id="marcacao" type="text" requerid value={Busca_animal.marcacao} onChange={(e)=>{handleBusca_marcacaoEdit(e,'marcacao')}} />
                </Box>
                <Box w="100%">
                <FormLabel htmlFor="marcacao">Buscar animal</FormLabel>
                <Button colorScheme='teal' size='xs' > Buscar </Button>
                </Box>
  
  
  
              </HStack>
  
  
              <HStack spacing="4">
              <Box w="100%">
                  <FormLabel htmlFor="a_nimal_code">Animal Code</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="ciic">CIIC</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="nome_animal">Nome animal</FormLabel>
                  <Input id="nome" />
                </Box>
                
  
  
              </HStack>
       
              <Divider orientation='horizontal' />
  
  
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Veterinário</FormLabel>
                  <Select placeholder='Selecione a opção'>
                    <option value='Exame'>Ana C. F. Auad - CRMV/MG 7412</option>
                    <option value='Exame'>Anderson P. A. - CRMV/MG 16487</option>
                    <option value='Exame'>Camilo O. F. - CRMV/MG 26754</option>
                    <option value='Exame'>Carolina M. H. - CRMV/MG 7243</option>
                    <option value='Exame'>Franciele S. A. CRMV/MG 20154</option>
                    <option value='Exame'>Loiane A. D. - CRMV/MG 32131</option>
                    <option value='Exame'>Luana F. N. CRMV/MG 20818</option>
                    <option value='Exame'>Marília H. D. A. - CRMV/MG 20261</option>
                    <option value='Exame'>Milena P. C. - CRMV/MG 22.445</option>
                </Select>
                </Box>
                <FormLabel htmlFor="Veterinário">Dados Veterinário</FormLabel>
                  <Input id="nome" />
                <Box w="100%">
                  
                </Box>
  
              </HStack>
  
              <Divider orientation='horizontal' />
              
  
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Procedimento</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='Exame'>Exame</option>
                  <option value='T_clinico'>Tratamento clínico</option>
                  <option value='T_preventivo'>Tratamento preventivo</option>
                  <option value='T_preventivo_terapeutico'>Tratamento preventivo e terapêutico</option>
                  <option value='T_topico'>Tratamento tópico</option>
                </Select>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="nasc">Tipo</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='Exame'>Exame</option>
                  <option value='T_clinico'>Tratamento clínico</option>
                  <option value='T_preventivo'>Tratamento preventivo</option>
                  <option value='T_preventivo_terapeutico'>Tratamento preventivo e terapêutico</option>
                  <option value='T_topico'>Tratamento tópico</option>
                </Select>
                </Box>
  
              </HStack>
              <HStack spacing="4">
  
              <Box w="100%"> 
              <FormLabel htmlFor="nasc">Subtipo</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='Exame'>Exame</option>
                  <option value='T_clinico'>Tratamento clínico</option>
                  <option value='T_preventivo'>Tratamento preventivo</option>
                  <option value='T_preventivo_terapeutico'>Tratamento preventivo e terapêutico</option>
                  <option value='T_topico'>Tratamento tópico</option>
                </Select>
                </Box>
                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Data</FormLabel>
                <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>
              </HStack>
       
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="cel">Descrição</FormLabel>
                  <Textarea placeholder='Digite a descrição aqui' />
                </Box>
                
              </HStack>
  
  
  
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Exame Clínico</FormLabel>
                  <Textarea placeholder='Digite os exames clínicos aqui'/>
                </Box>
               
              </HStack>
  
              <HStack spacing="4">
                
                <Box w="100%"> 
              <FormLabel htmlFor="nasc">Escore de Condição Corporal</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='1'>1 - Muito B=baixo</option>
                  <option value='2'>2 - Baixo</option>
                  <option value='3'>3 - Bom</option>
                  <option value='4'>4 - Alto</option>
                  <option value='5'>5 - Muito alto</option>
                </Select>
                </Box>
                
                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Data do Exame</FormLabel>
                <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Peso</FormLabel>
                  <Input width='auto' />
                </Box>
               
              </HStack>
  
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="a_nimal_code">Resultado</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="marcacao">Data do Resultado</FormLabel>
                  <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>
              </HStack>
  
              <HStack spacing="4">
                <Box w="100%">
                  <FormLabel htmlFor="a_nimal_code">Suspeita</FormLabel>
                  <Input id="nome" />
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="marcacao">Protocolo</FormLabel>
                  <Input placeholder=""  size="md" type="text"/>
                </Box>
              </HStack>
  
  
  
              <HStack spacing="4">
                
                <Box w="100%"> 
              <FormLabel htmlFor="nasc">Retorno</FormLabel>
                  <Select placeholder='Selecione a opção'>
                  <option value='1'>Sim</option>
                  <option value='2'>Não</option>
                  
                </Select>
                </Box>
                
                <Box w="100%"> 
                <FormLabel htmlFor="nasc">Data do Retorno</FormLabel>
                <Input placeholder="Select Date and Time"  size="md" type="date"/>
                </Box>
                <Box w="100%">
                  <FormLabel htmlFor="endereco">Diagnóstico</FormLabel>
                  <Input id="nome" />
                </Box>
               
              </HStack>
  
  
  
             
              <HStack justify="center">
                <Button
                  w={240}
                  p="6"
                  type="submit"
                  bg="teal.600"
                  color="white"
                  fontWeight="bold"
                  fontSize="xl"
                  mt="2"
                  _hover={{ bg: "teal.800" }}
                >
                  Enviar
                </Button>
              </HStack>
            </FormControl>
          </Center>
        </Flex>
      </Box>
    
       
      </div>
    </div>
  );
};


export default Atendimento;
