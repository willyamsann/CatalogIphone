import {
  ChakraProvider,
  Box,
  Flex,
  Image,
  Text,
  Button,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import CardProduto from "./CardProduto";

const ListaProdutos = () => {
  const [ordenacao, setOrdenacao] = useState("default"); // Estado para a ordenação dos produtos

  const produtos = [
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 12",
      valor: 1200,
      estado: "Novo",
      descricao: "1 ano de garantia apple, aparelho Novo, lacrado",
    },
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 13",
      valor: 1900,
      estado: "Usado",
      descricao: "2 ano de garantia apple, aparelho Novo, lacrado",
    },
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 13",
      valor: 1900,
      estado: "Usado",
      descricao: "2 ano de garantia apple, aparelho Novo, lacrado",
    },
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 13",
      valor: 1900,
      estado: "Usado",
      descricao: "2 ano de garantia apple, aparelho Novo, lacrado",
    },
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 13",
      valor: 1900,
      estado: "Usado",
      descricao: "2 ano de garantia apple, aparelho Novo, lacrado",
    },
    {
      imagem:
        "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17994-zero.png?context=bWFzdGVyfGltYWdlc3w2NTkwOHxpbWFnZS9wbmd8YUROakwyZ3lZUzg1TnpNME56QTJPRFUxT1RZMkx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnprNU5GOTZaWEp2TG5CdVp3fDk2NGUyZTM0ZDM1MzVhMTkyM2RiZjUyN2U1YWRjNzA0MzIwMzJlMmYyNjRiNDRhMWQ2MmUxNjhmZjA4Njc2OWQ",
      titulo: "IPhone 13",
      valor: 1900,
      estado: "Usado",
      descricao: "2 ano de garantia apple, aparelho Novo, lacrado",
    },
  ];

  const ordenarProdutos = (tipoOrdenacao: React.SetStateAction<string>) => {
    setOrdenacao(tipoOrdenacao);
    // Lógica de ordenação dos produtos
    const produtosOrdenados = [...produtos];

    if (tipoOrdenacao === "precoMenor") {
      produtosOrdenados.sort((a, b) => Number(a.valor) - Number(b.valor));
    } else if (tipoOrdenacao === "precoMaior") {
      produtosOrdenados.sort((a, b) => Number(b.valor) - Number(a.valor));
    }
    // Definindo a nova lista de produtos ordenados
    // Aqui você pode definir a lista de produtos a serem exibidos após a ordenação
    // Por exemplo, atualizar o estado dos produtos a serem exibidos
    // setProdutos(produtosOrdenados);
  };

  return (
    <ChakraProvider>
      <Flex justify="space-between" align="center" mb="4">
        <Box>
          <Select onChange={(e) => ordenarProdutos(e.target.value)}>
            <option value="default">Ordenar por</option>
            <option value="precoMenor">Preço - Menor para Maior</option>
            <option value="precoMaior">Preço - Maior para Menor</option>
            {/* Adicione mais opções de ordenação conforme necessário */}
          </Select>
        </Box>
      </Flex>

      {produtos.map((produto, index) => (
        <CardProduto
          key={index}
          imagem={produto.imagem}
          titulo={produto.titulo}
          valor={produto.valor}
          estado={produto.estado}
          descricao={produto.descricao}
        />
      ))}
    </ChakraProvider>
  );
};

export default ListaProdutos;
