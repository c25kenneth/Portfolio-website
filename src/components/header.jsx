import {Heading, Text} from '@chakra-ui/react'
import React from 'react'

function MyHeader() {
    return (
        <><Heading alignSelf={'flex-center'} padding={'20px'} size={'3xl'}>
            Hi, My name is
        </Heading><Text fontSize={'8xl'} bgGradient='linear(to-r, pink.500, pink.300, blue.500)' bgClip={'text'}>Kenneth Choi</Text></>
    );
}

export default MyHeader; 