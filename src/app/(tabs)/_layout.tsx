import Ionicons from '@react-native-vector-icons/ant-design';
import { Tabs } from 'expo-router';

const TabsLayOut = () => {
  return (
    <Tabs 
    screenOptions={{
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:"green",
        tabBarStyle:{
            backgroundColor:"#1e293b",
            borderWidth:1,
            borderTopColor:"yellow",
            height:90,
            paddingBottom:30,
            paddingTop:10
        },
        tabBarLabelStyle:{
            fontSize:12,
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
        name='settings'
        options={{title:"Setting",
            tabBarIcon:({color,size})=>(
                <Ionicons name='setting'  size={size} color={color} />
            )
        }}
        
        />


    </Tabs>
    
  )
}

export default TabsLayOut