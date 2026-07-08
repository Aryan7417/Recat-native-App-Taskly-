import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Headr from "../../../components/Headr";
import TodoInput from "../../../components/todoInput";



export default function Index() {
  
  const { toggleDarkMode,colors } = useTheme()
  const HomeStyles  = createHomeStyles(colors)

  return (

    <LinearGradient
    colors={colors.gradients.background} 
    style ={HomeStyles.container}
     >

      <StatusBar barStyle={colors.statusBarStyle} />

    <SafeAreaView style={HomeStyles.safeArea} >
      <Headr/>
      <TodoInput/>

    
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggel the mode</Text>
      </TouchableOpacity>


    </SafeAreaView>
    </LinearGradient>
  
);
}

