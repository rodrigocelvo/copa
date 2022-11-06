import { Heading, Text, VStack } from 'native-base';
import { Header } from '../components/Header';

import Logo from '../assets/logo.svg';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Find() {
  return (
    <VStack flex={1} bg="gray.900">
      <Header showBackButton title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Heading
          mb={8}
          fontFamily="heading"
          color="white"
          fontSize="xl"
          textAlign="center">
          Encontre um bolão através de{'\n'} seu código único
        </Heading>

        <Input mb={2} placeholder="Qual o código do bolão?" />

        <Button title="Buscar Bolão" />
      </VStack>
    </VStack>
  );
}
