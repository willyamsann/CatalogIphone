import { ChakraProvider, Flex, Image, Text, Button } from "@chakra-ui/react";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import React from "react";

export const Header = () => {
  // Funções para redirecionar para os números de telefone e WhatsApp
  const redirecionarTelefone = () => {
    window.location.href = "tel:+123456789"; // Substitua com o número de telefone desejado
  };

  const redirecionarWhatsApp = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=123456789"; // Substitua com o número do WhatsApp desejado
  };

  return (
    <Flex direction="column" align="center" justify="center" h="30vh">
      <Image
        src="https://cdn-meloja.nyc3.cdn.digitaloceanspaces.com/stores/uploads/1672519/logo-removebg-preview.png"
        alt="Logo"
        boxSize="100px"
      />

      <Text textAlign="center" mt={4}>
        Vendas de Iphones e Acessorios
      </Text>

      <Flex mt={4}>
        <Button leftIcon={<FaPhone />} onClick={redirecionarTelefone} mr={2}>
          Telefone
        </Button>
        <Button
          leftIcon={<FaWhatsapp />}
          onClick={redirecionarWhatsApp}
          colorScheme="green"
        >
          WhatsApp
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;
