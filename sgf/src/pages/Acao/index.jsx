import { Button, Form, Input } from "antd";

import MenuPage from "../../components/Menu";
import Vacina from "./Formularios/Vacina";

import styles from "./Acao.module.css";
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
} from "@chakra-ui/react";
import { useState } from "react";



const Acao = () => {

  const [select,setSelect]= useState();
  const handleCapacity=(e)=>{
    setSelect(e.target.value);
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
          Ação de calendário sanitário
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
                <FormLabel htmlFor="nasc">Ação Sanitária</FormLabel>
                  <Select placeholder='Selecionar' 
                  value={select} onChange={handleCapacity}
                  
                    >
                  <option value='Vacina'>Vacina</option>
                  <option value='Endectoparasitario'>Endectoparasitário</option>
                  <option value='Ectoparasitario'>Ectoparasitário</option>
                  <option value='Endoparasitario'>Endoparasitário</option>
                  
                </Select>
                </Box>
  
              </HStack>
              {select == 'Vacina' && 
              
                <div>
                  <br/>
                  <Vacina/>
                </div>
              
              }
              {select == 'Endectoparasitario' && 
              
              <div>
                  <h1>
                    oi

                  </h1>
                </div>
              
              }
              {select == 'Ectoparasitario' && <FormC/>
              
              
              
              
              }
              {select == 'Endoparasitario' && <FormD/>
              
              
              
              
              
              }





  
  
            </FormControl>
          </Center>
        </Flex>
      </Box>

       
      </div>
    </div>





  );
};
export default Acao;

