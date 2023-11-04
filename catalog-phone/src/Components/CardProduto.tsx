import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  Grid,
  GridItem,
  Badge,
  VStack,
  HStack,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { FaApple } from "react-icons/fa";

interface CardProdutoProps {
  imagem: string;
  titulo: string;
  valor: any;
  estado: string;
  descricao: string;
}

const CardProduto: React.FC<CardProdutoProps> = ({
  imagem,
  titulo,
  valor,
  estado,
  descricao,
}) => {
  const [produtoInfo] = useState({
    codigo: "#000",
    produto: "Iphone 12",
    valor: "1200",
    estado: "Novo",
    armazenamento: "256",
    interesse: "Tenho interesse",
  });

  const formattedMessage = `Código: ${produtoInfo.codigo}%0D%0AProduto: ${produtoInfo.produto}%0D%0AValor: ${produtoInfo.valor}%0D%0AEstado: ${produtoInfo.estado}%0D%0AArmazenamento: ${produtoInfo.armazenamento}%0D%0A${produtoInfo.interesse}`;

  const whatsappLink = `https://wa.me/82999703229/?text=${formattedMessage}`;

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="4"
      mb="4"
      boxShadow="0 4px 8px 0 rgba(0,0,0,0.2)"
    >
      <Grid templateColumns="repeat(3, 1fr)">
        <GridItem colSpan={1} h="140px.">
          <Image
            src={imagem}
            alt={titulo}
            boxSize="100px"
            objectFit="cover"
            pt={2}
          />
        </GridItem>
        <GridItem colSpan={2} h="160px">
          <Box alignItems="flex-start" textAlign="left">
            <Text
              fontSize="xl"
              fontWeight="bold"
              mb="2"
              textTransform="uppercase"
            >
              {titulo}
            </Text>
            <Text fontSize="lg" mb="2" fontWeight={500} color="green  ">
              Valor: R$ {valor}
            </Text>
            <Text lineHeight={1} fontSize={14}>
              {descricao}
            </Text>
            <HStack pt={4}>
              <Badge
                borderRadius="full"
                px="3"
                bg="blue.500"
                color="white"
                display="flex"
                alignItems="center"
              >
                {estado}
              </Badge>
              <Badge
                borderRadius="full"
                px="3"
                bg="blue.500"
                color="white"
                display="flex"
                alignItems="center"
              >
                <Box mr="2">
                  <FaApple />
                </Box>
                256 GB
              </Badge>
              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                bg="green.400"
                color="white"
                h={7}
                _hover={{ bg: "green.600" }}
                mt={4}
                top="-140px"
              >
                Quero!
              </Button>
            </HStack>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default CardProduto;
