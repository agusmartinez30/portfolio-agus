import { CARDS_TECHNOLOGIES } from '@base/data/data'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function StackTech() {

  const MAIN_TECH = [
    {
      image: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png',
      title: 'node-js-logo'
    },
    {
      image: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-3629020-3030245.png",
      title: 'mongo-db-logo'
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: 'react-js-logo'
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
      title: 'typescript-logo'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/640px-Angular_full_color_logo.svg.png',
      title: 'angular-js-logo'
    },
   
  ]

  return (
    <Box width={{ base: "100%", md: "440px" }} display={"flex"} flexDirection={"row"} flexWrap={"wrap"} justifyContent={"space-between"} paddingY={2}  >

      {
        MAIN_TECH.map((card) => (
          <Box padding={2}>
            <Image width={"45px"} height={"45px"} objectFit={"contain"} src={card.image} alt={card.title} />
          </Box>
        ))
      }
    </Box>
  )
}

export default StackTech