import { createHomeStyles } from '@/assets/styles/home.styles'
import useTheme from '@/hooks/useTheme'
import Ionicons from '@expo/vector-icons/Ionicons'
import { useQuery } from 'convex/react'
import { LinearGradient } from "expo-linear-gradient"
import { Text, View } from 'react-native'
import { api } from '../convex/_generated/api'


const Headr = () => {

    const { colors }= useTheme()

    const HomeStyles = createHomeStyles(colors)
    const todos= useQuery(api.todos.getTodos)

    const completeCount = todos ? todos.filter((todo) => todo.isComplete).length : 0
    const totalCount = todos ? todos.length : 0
    const progressPercentage = totalCount > 0 ? (completeCount/totalCount)*100 :0 


  return (
    <View style={HomeStyles.header} >
        <View style={HomeStyles.titleContainer}>
            <LinearGradient 
            colors={colors.gradients.primary} 
            style={HomeStyles.iconContainer} >
                <Ionicons name="flash-outline" size={28} color="#fff" />

            </LinearGradient>

            <View style={HomeStyles.titleTextContainer}>
                <Text style={HomeStyles.title}>Today&apos;s Tasks 👀</Text>

                <Text style={HomeStyles.subtitle}>
                    {completeCount} of {totalCount} completed</Text>
           
            </View>

        </View>

        
            <View style={HomeStyles.progressContainer}>
                <View style={HomeStyles.progressBarContainer}>
                    <View style={HomeStyles.progressBar}>
                        <LinearGradient
                        colors={colors.gradients.success}
                        style={[HomeStyles.progressFill ,{width:`${progressPercentage}%`} ]}
                        />
                        <Text style={HomeStyles.progressText}>{Math.round(progressPercentage)}%</Text>

                    </View>
                </View>
            </View>
            
        


    </View>
  )
}

export default Headr