import { CARDS_TECHNOLOGIES } from '@base/data/data'
import { Box, Image } from '@chakra-ui/react'
import React from 'react'

function StackTech() {

  const MAIN_TECH = [
    {
      image: 'https://martinacosta.vercel.app/assets/chakraui.png',
      title: 'chakra-ui-logo'
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      title: 'react-js-logo'
    },
    {
      image: "https://martinacosta.vercel.app/assets/css.png",
      title: 'css-logo'
    },
    {
      image: 'https://cdn.worldvectorlogo.com/logos/typescript-2.svg',
      title: 'typescript-logo'
    },
    {
      image: 'https://raw.githubusercontent.com/github/explore/e4270e345b968ae626310bc86e339a2ae80c6ae4/topics/ecmascript/ecmascript.png',
      title: 'js-logo'
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