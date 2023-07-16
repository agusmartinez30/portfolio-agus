import { Box, Container, Text } from '@chakra-ui/react';
import React from 'react';

const Footer = () => {
	return (
		<Container maxW={"100%"}  paddingY={6}>
			<Box maxW={"960px"} margin={"0 auto"} display={"flex"} flexDirection={'column'} justifyContent={"center"} alignItems={"center"} gap={8}>
				<Text fontSize={{base:"16px", md: "18px"}} color={"#000"}>© 2023 Agustín Martinez</Text>
				<Box as="ul" display="flex" listStyleType={"none"} gap={4}>
					<Box
						as="li"
						transition={"all .3s ease-in"}
            _hover={{ bgColor: "#CFEFF2", color: "#000" }}
						borderRadius="full"
						padding={2}
					>
						<a href="http://github.com/agusmartinez30">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
							</svg>
						</a>
					</Box>
					<Box
						as="li"
						transition={"all .3s ease-in"}
            _hover={{ bgColor: "#CFEFF2", color: "#000" }}
						borderRadius="full"
						padding={2}
					>
						<a href="https://www.linkedin.com/in/agustin-martinez-developer/">
							<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-linkedin" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" fill="none" stroke-linecap="round" stroke-linejoin="round">
								<path stroke="none" d="M0 0h24v24H0z" fill="none" />
								<rect x="4" y="4" width="16" height="16" rx="2" />
								<line x1="8" y1="11" x2="8" y2="16" />
								<line x1="8" y1="8" x2="8" y2="8.01" />
								<line x1="12" y1="16" x2="12" y2="11" />
								<path d="M16 16v-3a2 2 0 0 0 -4 0" />
							</svg>
						</a>
					</Box>
				</Box>
			</Box>


		</Container>
	)
};

export default Footer;
