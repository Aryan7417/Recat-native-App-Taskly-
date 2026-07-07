import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack>
    
    <Stack screenOptions={{headerShown:false}}/>
    
   <Stack.Screen name ="(tabs)" options={{title:"Home"}}/>
   
  
  </Stack>

  // return <Stack screenOptions={{headerShown:false}}/>



}
