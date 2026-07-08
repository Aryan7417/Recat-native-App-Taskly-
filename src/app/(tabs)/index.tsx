import { createHomeStyles } from "@/assets/styles/home.styles";
import useTheme from "@/hooks/useTheme";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation, useQuery } from "convex/react";
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, FlatList, StatusBar, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EmptyState from "../../../components/EmptyState";
import Headr from "../../../components/Headr";
import LoadingSpinner from "../../../components/LoadingSpinner";
import TodoInput from "../../../components/todoInput";
import { api } from "../../../convex/_generated/api";
import { Doc, Id } from "../../../convex/_generated/dataModel";


type Todo = Doc<"todos">
export default function Index() {
  
  const { toggleDarkMode,colors } = useTheme()
  const HomeStyles  = createHomeStyles(colors)
  const todos = useQuery(api.todos.getTodos)
  const toggleTodo = useMutation(api.todos.toggletodo)
  const deleteTodod = useMutation(api.todos.deleteTodo)
  


  const isLoading = todos === undefined

  if(isLoading) return <LoadingSpinner/>



  const handleToggletodo = async (id:Id<"todos">)=>{
    try {
      await toggleTodo({id})
      
    } catch (error) {
      console.log("Error Togglng todo " , error)
      Alert.alert("Error" , "filed to toggle todo")
      
    }
  }

  const handleDeleteTodo=async(id:Id<"todos">)=>{
    Alert.alert("Delete Todo" ,"Dek Le kr do Delete🗑️",[
      {text:"Cancle", style:"cancel"},
      {text:"Delete" , style:"destructive", onPress:()=>deleteTodod({id})}
    ])
    
  }

 

  const rendertodoItem = ({item} :{item:Todo})=>{

    return (
      <View style ={HomeStyles.todoItemWrapper} >
        <LinearGradient
        colors={colors.gradients.surface}
        style={HomeStyles.todoItem}
        start={{x:0 ,y:0}}
        end={{x:1 , y:1}}
        >
        <TouchableOpacity
          style={HomeStyles.checkbox}
          activeOpacity={0.7}
          onPress={()=>handleToggletodo(item._id)}
          
          >


          <LinearGradient
          colors={item.isComplete ? colors.gradients.success : colors.gradients.muted}
          style={[
            HomeStyles.checkboxInner,
            {
              borderColor:item.isComplete ? "transparent" : colors.border
            },
            
          ]}
          >
            {
              item.isComplete && <Ionicons name="checkmark" size={18} color="#fff" />
            }


            


          </LinearGradient>
        </TouchableOpacity>

        <View style={HomeStyles.todoTextContainer}>
          <Text 
          style={[
            HomeStyles.todoText,
            item.isComplete && {
              textDecorationLine :"line-through",
              color:colors.textMuted,
              opacity:0.64
            }
          ]}
          >
            {item.text}

          </Text>

          <View style={HomeStyles.todoActions}>
            <TouchableOpacity onPress={()=>{}} activeOpacity={0.8}>
              <LinearGradient colors={colors.gradients.warning}
              style={HomeStyles.actionButton}>
                <Ionicons name='pencil' size={14} color="#fff" />
              </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>handleDeleteTodo(item._id)} activeOpacity={0.8}>
              <LinearGradient
              colors={colors.gradients.danger}
              style={HomeStyles.actionButton}
              >
                <Ionicons name="trash-bin" size={14} color="#fff"  />

              </LinearGradient>
            </TouchableOpacity>
          </View>




        </View>

        </LinearGradient>
      </View>
    )


  }




  return (

    <LinearGradient
    colors={colors.gradients.background} 
    style ={HomeStyles.container}
     >

      <StatusBar barStyle={colors.statusBarStyle} />

    <SafeAreaView style={HomeStyles.safeArea} >
      <Headr/>
      <TodoInput/>

      <FlatList
      data={todos}
      renderItem={rendertodoItem}
      keyExtractor={(item)=>item._id}
      style={HomeStyles.todoList}
      contentContainerStyle={HomeStyles.todoListContent}
      ListEmptyComponent={<EmptyState/>}
      />
    
    


    </SafeAreaView>
    </LinearGradient>
  
);
}

