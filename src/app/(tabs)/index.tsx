import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  
  const { toggleDarkMode } = useTheme()


  return (
    <View style={styles.container} >
      <Text style={{fontSize:40}}>hello my name is aryan.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>toggel the mode</Text>

      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontSize:40
  },
});
