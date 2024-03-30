import { Box, Button, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { FaRocket, FaRobot, FaShapes, FaShare } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Flex as="nav" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tight">
            Freeform
          </Heading>
        </Flex>
        <Box display="flex">
          <Button variant="link" mr={4}>
            Pricing
          </Button>
          <Button variant="link" mr={4}>
            Templates
          </Button>
          <Button variant="link" mr={4}>
            Login
          </Button>
          <Button colorScheme="blue">Sign up for free</Button>
        </Box>
      </Flex>

      {/* Hero */}
      <Box textAlign="center" py={20}>
        <Heading as="h1" size="2xl" mb={6}>
          <Text as="span" bgGradient="linear(to-r, blue.400, purple.500)" bgClip="text">
            A new way to create
          </Text>{" "}
          <br />
          Powered by AI.
        </Heading>
        <Text fontSize="xl" mb={8}>
          Beautiful documents, decks, and websites. No design or coding skills required.
        </Text>
        <Button colorScheme="blue" size="lg">
          Sign up for free
        </Button>
      </Box>

      {/* Features */}
      <Box py={20}>
        <VStack spacing={12} align="stretch">
          <Flex>
            <Box flex={1} pr={8}>
              <Heading size="xl" mb={4}>
                Generate in seconds
              </Heading>
              <Text fontSize="lg" mb={6}>
                Create a working document, presentation or webpage in under a minute using our powerful AI generator.
              </Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1521791055366-0d553872125f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGdlbmVyYXRpbmclMjBkb2N1bWVudHxlbnwwfHx8fDE3MTE4NDMxMzN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI generating" boxSize="300px" objectFit="cover" />
          </Flex>

          <Flex>
            <Image src="https://images.unsplash.com/photo-1472289065668-ce650ac443d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMHByZXNlbnRhdGlvbiUyMHRlbXBsYXRlfGVufDB8fHx8MTcxMTg0MzEzM3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Presentation template" boxSize="300px" objectFit="cover" />
            <Box flex={1} pl={8}>
              <Heading size="xl" mb={4}>
                Polished and on-brand
              </Heading>
              <Text fontSize="lg" mb={6}>
                Make your content shine with beautiful templates that align with your brand, in just one click.
              </Text>
            </Box>
          </Flex>

          <Flex>
            <Box flex={1} pr={8}>
              <Heading size="xl" mb={4}>
                Present live or share
              </Heading>
              <Text fontSize="lg" mb={6}>
                Get your point across with present mode, or share a webpage. Engage your audience on any device.
              </Text>
            </Box>
            <Image src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwcmVzZW50aW5nJTIwZnJvbSUyMGxhcHRvcHxlbnwwfHx8fDE3MTE4NDMxMzR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Presenting" boxSize="300px" objectFit="cover" />
          </Flex>

          <Flex>
            <Image src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMHdlYnNpdGUlMjBtb2NrdXB8ZW58MHx8fHwxNzExODQzMTM0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Interactive website" boxSize="300px" objectFit="cover" />
            <Box flex={1} pl={8}>
              <Heading size="xl" mb={4}>
                Bring ideas to life
              </Heading>
              <Text fontSize="lg" mb={6}>
                Embed anything - GIFs, videos, charts, websites. Break down walls of text to keep your audience engaged.
              </Text>
            </Box>
          </Flex>
        </VStack>
      </Box>

      {/* CTA */}
      <Box bgGradient="linear(to-r, blue.500, purple.500)" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={6} color="white">
          Open the door to a new universe of creation
        </Heading>
        <Text fontSize="lg" mb={8} color="white">
          More visual than a doc. More collaborative than a deck. More interactive than a video.
        </Text>
        <Button colorScheme="whiteAlpha" size="lg">
          Try Freeform for free
        </Button>
      </Box>

      {/* Footer */}
      <Box as="footer" py={10} textAlign="center" fontSize="sm">
        <Text mb={2}>&copy; Freeform AI 2023</Text>
        <Link href="/terms" mr={4}>
          Terms
        </Link>
        <Link href="/privacy">Privacy</Link>
      </Box>
    </Box>
  );
};

export default Index;
