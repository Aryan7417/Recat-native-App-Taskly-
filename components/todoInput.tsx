import { createHomeStyles } from '@/assets/styles/home.styles';
import useTheme from '@/hooks/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useMutation } from 'convex/react';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Alert, TextInput, TouchableOpacity, View } from 'react-native';
import { api } from '../convex/_generated/api';

const TodoInput = () => {
    const {colors} = useTheme();
    const HomeStyles = createHomeStyles(colors)

    const [newTodo,setNewTodo] = useState("")
    const addTodo = useMutation(api.todos.addTodo)

    const handleAddTodo = async()=>{
        if(newTodo.trim()){
            try {
                await addTodo({text:newTodo.trim()})
                setNewTodo("")
                
            } catch (error) {
                console.log("Error adding a todod" , error)
                Alert.alert("Error","failed to add todo")
                
            }
        }
    }
  
  
    return (
    <View style={HomeStyles.inputSection}>
    <View style={HomeStyles.inputWrapper}>
        <TextInput
        style={HomeStyles.input}
        placeholder='What need to be done ?'
        onChangeText={setNewTodo}
        onSubmitEditing={handleAddTodo}
        
        placeholderTextColor={colors.textMuted}
        
        />

        <TouchableOpacity onPress={handleAddTodo} activeOpacity={0.8} disabled={!newTodo.trim()}>
            <LinearGradient
            colors={newTodo.trim() ? colors.gradients.primary :colors.gradients.muted }
            style={[HomeStyles.addButton, !newTodo.trim() && HomeStyles.addButtonDisabled]}
            >
                <Ionicons name="add" size={24} color="#fff" />
            </LinearGradient>

        </TouchableOpacity>




    </View>
      
    </View>
  )
}

export default TodoInput