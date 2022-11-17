import { Center, Text, Button } from 'native-base'

export function SignIn(){
    return (
        <Center flex={1} bgColor="gray.900">
            <Text color="white" fontSize={24} fontFamily="heading">
                Singn In!
            </Text>
            <Button>Sign</Button>
        </Center>
    )
}