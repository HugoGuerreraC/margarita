import Layout from "@/components/Layout";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Button,
  Input,
  Box,
  Flex,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";

const schema = z.object({
  name: z.string().min(1, { message: "Le nom ne peut pas être vide" }),
  email: z
    .string()
    .email({ message: "Veuillez entrer une adresse e-mail valide" }),
  message: z.string().min(1, { message: "Le message ne peut pas être vide" }),
});

type Schema = z.infer<typeof schema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Schema>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data); // Vous pouvez envoyer ces données au backend
  };

  return (
    <Layout>
      <Flex
        flexDirection="column"
        alignItems="center"
        justifyContent="space-around"
        h="calc(100vh - 300px)"
      >
        <Box>Contactez Nous ici </Box>
        <Flex
          w="100%"
          flexDirection="column"
          alignItems="center"
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          marginBottom={10}
        >
          <Box w="80%">
            <FormControl isInvalid={!!errors.name} mb={4}>
              <FormLabel>Nom</FormLabel>
              <Input
                {...register("name")}
                borderColor={errors.name ? "red" : "gray.300"}
              />
              <FormErrorMessage color="red">
                {errors.name?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.email} mb={4}>
              <FormLabel>Adresse e-mail</FormLabel>
              <Input
                {...register("email")}
                borderColor={errors.email ? "red" : "gray.300"}
              />
              <FormErrorMessage color="red">
                {errors.email?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.message} mb={4}>
              <FormLabel>Message</FormLabel>
              <Textarea
                {...register("message")}
                borderColor={errors.message ? "red" : "gray.300"}
              />
              <FormErrorMessage color="red">
                {errors.message?.message}
              </FormErrorMessage>
            </FormControl>

            <Button type="submit" colorScheme="blue" mt={4}>
              Envoyer
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default Contact;
