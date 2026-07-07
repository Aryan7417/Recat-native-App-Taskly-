import useTheme from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { api } from "../../../convex/_generated/api";


export default function Index() {
  
  const { toggleDarkMode } = useTheme()


  const todos = useQuery(api.todos.getTodos)
  console.log(todos)

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
