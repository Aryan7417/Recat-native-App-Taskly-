import { Themeprovider } from "@/hooks/useTheme";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    
    <Themeprovider>
    
    <Stack screenOptions={{headerShown:false}}>

    
    <Stack.Screen name ="(tabs)" />
    </Stack>

    </Themeprovider>
    
  )



}
