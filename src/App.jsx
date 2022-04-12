import { useState } from 'react'
import {Center, Text, Box, Heading, Container} from '@chakra-ui/react'; 
import {IconButton, HStack, VStack, Avatar} from '@chakra-ui/react';
import {FaSun, FaMoon, FaRegEnvelope, FaGithub, FaBrain, FaTwitter, FaAndroid, FaApple, FaUnity, FaPython} from 'react-icons/fa';
import MyHeader from './components/header';
import {useColorMode} from '@chakra-ui/color-mode'
import {SiDart, SiCsharp, SiCplusplus, SiJavascript, SiSolidity, SiFlutter, SiFirebase, SiTensorflow, SiScikitlearn, SiKeras, SiPandas} from 'react-icons/si'
import {CgGames} from 'react-icons/cg'
import {RiBracketsLine} from 'react-icons/ri'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'

function App() {
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }


  const  {colorMode, toggleColorMode} = useColorMode(); 
  const isDark = colorMode === 'dark'; 
  return (
    <div className="App">
      <VStack>
        <IconButton ml={8} m={5} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode} alignSelf={'flex-end'}></IconButton>

        <MyHeader/>
        <Container>
          <Center>
            <Avatar size='4xl' name='Here is Me' src='https://avatars.githubusercontent.com/u/70728301?s=400&v=4' />
          </Center> 
        </Container>
        <Heading paddingTop={50} size={'3xl'}>Contact Info: </Heading>
        <HStack alignSelf={'flex-center'}>  
          <IconButton isRound='true' size={'lg'} icon={<FaRegEnvelope/>} onClick={window.open('mailto:c25kenneth@gmail.com?subject=Subject&body=Body%20goes%20here')}/>
          <IconButton isRound='true' size={'lg'} icon={<FaGithub/>} onClick={openInNewTab('https://github.com/thequickbrownfoxjumpedoverthelazydog')}/>
          <IconButton isRound='true' size={'lg'} icon={<FaTwitter/>} onClick={openInNewTab('https://twitter.com/Kenneth31079194')}/>
        </HStack>
        <Heading paddingTop={100} fontSize={'120px'}>Who Am I?</Heading>
        <Container width={'900px'}>
          <Text align={'center'} paddingTop={5} paddingBottom={50} fontSize={20}>
            I'm Kenneth, a High School Student who is passionate about all sorts of tech and programming. I am 
            currently proficient in Mobile Development using Flutter and Machine Learning. I also do game dev and I am 
            currently learning blockchain development and Web Development. I'm always hoping to learn more and if you want to talk 
            about anything, don't hesitate to reach out 👊!
          </Text>
        </Container>

      </VStack>

      <Center>
      <HStack spacing={'16'} marginBottom={'50'} marginTop={50}>
      <Box height={400} width={300} bgColor={'blue.500'} bgGradient='linear(to-r, green.200, pink.500)'>
          <Heading align={'center'}>
            Mobile Dev
          </Heading>
          <Center>
            <HStack>
              <FaAndroid size={30}/>
              <FaApple size={30}/>
            </HStack>
          </Center>

          <Center>

            <VStack>
            <UnorderedList marginTop={50} marginBottom={50}>
              <ListItem>Flutter</ListItem>
              <ListItem>Firebase Auth</ListItem>
              <ListItem>Firestore</ListItem>
              <ListItem>Firebase Cloud Storage</ListItem>
              <ListItem>Android</ListItem>
              <ListItem>Various Flutter Packages</ListItem>
            </UnorderedList>
            <HStack>
              <SiFlutter size={30}/>
              <SiFirebase size={30}/>
            </HStack>

            </VStack>
          </Center>
      </Box>
      <Box height={400} width={300} bgColor={'blue.500'} bgGradient='linear(to-l, #7928CA, #FF0080)'>
          <Heading align={'center'}>
            Machine Learning
          </Heading>
          <Center>
            <FaBrain size={30}/>
          </Center>
          <Center>
            <VStack>
              <UnorderedList marginTop={'20px'} marginBottom={55}>
                <ListItem>Tensorflow</ListItem>
                <ListItem>Sci-Kit Learn</ListItem>
                <ListItem>Pandas</ListItem>
                <ListItem>Keras</ListItem>
                <ListItem >MatPlotLib</ListItem>
              </UnorderedList>
              <HStack>
                <SiTensorflow size={30}/>
                <SiScikitlearn size={30}/>
                <SiKeras size={30}/>
                <SiPandas size={30}/>
              </HStack>
            </VStack>           
          </Center>
          
      </Box>
      <Box height={400} width={300} bgColor={'blue.500'} bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'>
          <Heading align={'center'}>
            Game Dev
          </Heading>
          <Center>
            <CgGames size={30}/>
          </Center>
          <Center>  
            <VStack>
              <UnorderedList marginTop={'20px'} marginBottom={160}>
                <ListItem>Unity</ListItem>
                <ListItem>Chainsafe SDK</ListItem>
                <ListItem>Game Design</ListItem>
              </UnorderedList>
              <FaUnity size={30}/>
            </VStack>


          </Center>

      </Box>
      <Box height={400} width={300} bgColor={'blue.500'} bgGradient={[
        'linear(to-tr, teal.300, yellow.400)',
        'linear(to-t, blue.200, teal.500)',
        'linear(to-b, orange.100, purple.300)',
      ]} >
          <Heading align={'center'}>
            Languages
          </Heading>
          <Center>
            <RiBracketsLine fontSize={30}/>
          </Center>
          <Center>  
            <VStack>
              <UnorderedList marginTop={'20px'} marginBottom={90}>
                <ListItem>Python</ListItem>
                <ListItem>Javascript</ListItem>
                <ListItem>C#</ListItem>
                <ListItem>C/C++</ListItem>
                <ListItem>Dart</ListItem>
                <ListItem>Solidity</ListItem>
              </UnorderedList>
              <HStack>
                <SiDart size={30}/>
                <FaPython size={30}/>
                <SiCsharp size={30}/>
                <SiCplusplus size={30}/>
                <SiJavascript size={30}/>
                <SiSolidity size={30}/>
              </HStack>
            </VStack>

          </Center>
      </Box>
      </HStack>
      </Center>


    </div>
  )
}

export default App
