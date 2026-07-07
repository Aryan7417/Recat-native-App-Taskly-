import useTheme from '@/hooks/useTheme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

const TabsLayOut = () => {

    const {colors} = useTheme()

  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor:colors.primary,
        tabBarInactiveTintColor:colors.textMuted,
        tabBarStyle:{
            backgroundColor:colors.surface,
            borderWidth:1,
            borderTopColor:colors.border,
            height:90,
            paddingBottom:30,
            paddingTop:10
        },
        tabBarLabelStyle:{
            fontSize:19,
            fontWeight:'500'
        },
       headerShown:false
    }}
    >
        <Tabs.Screen
        name='index'
        options={{title:"Todos",
            tabBarIcon:({color,size})=>(
                <Ionicons name='flash-outline' size={size} color={color}  />
            )
        }}
        
        />
         <Tabs.Screen
        name='setting'
        options={{title:"setting",
            tabBarIcon:({color,size})=>(
                <Ionicons name='settings'  size={size} color={color} />
            )
        }}
        
        />


    </Tabs>
    
  )
}

export default TabsLayOut