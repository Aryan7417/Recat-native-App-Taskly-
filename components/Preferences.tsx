import { createSettingsStyles } from '@/assets/styles/setting.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Switch, Text, View } from 'react-native'

const Preferences = () => {
  const [isAutoSync , setIsAutosync] = useState(true)
  const [isNotifiocation,setIsNotifcation]= useState(true)

  const{colors ,isDarkMode,toggleDarkMode} = useTheme()
  const settingStyle= createSettingsStyles(colors)
  return (
    <View>
      <LinearGradient colors={colors.gradients.surface} style={settingStyle.section}>
        <Text style={settingStyle.sectionTitle}>Preferences</Text>
        
        <View style={settingStyle.settingItem}>
          <View style={settingStyle.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyle.settingIcon}>
              <Ionicons name='moon' size={18} color="#Fff"  />

            </LinearGradient>
        
            <Text style={settingStyle.settingText} >Dark Mode</Text>

          </View>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} thumbColor={"#fff"} 
          trackColor={{false:colors.border , true:colors.primary}} />

        </View>

      

      <View style={settingStyle.settingItem}>
          <View style={settingStyle.settingLeft}>
            <LinearGradient colors={colors.gradients.warning} style={settingStyle.settingIcon}>
              <Ionicons name='notifications' size={18} color="#Fff"  />

            </LinearGradient>
        
            <Text style={settingStyle.settingText} >Notification🔔</Text>

          </View>
          <Switch value={isNotifiocation} onValueChange={()=>setIsNotifcation(!isNotifiocation)} thumbColor={"#fff"} 
          trackColor={{false:colors.border , true:colors.primary}} />

        </View>

        <View style={settingStyle.settingItem}>
          <View style={settingStyle.settingLeft}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyle.settingIcon}>
              <Ionicons name='sync' size={18} color="#Fff"  />

            </LinearGradient>
        
            <Text style={settingStyle.settingText} >AutoSync♻️</Text>

          </View>
          <Switch value={isAutoSync} onValueChange={()=>setIsAutosync(!isAutoSync)} thumbColor={"#fff"} 
          trackColor={{false:colors.border , true:colors.primary}} />

        </View>
      </LinearGradient>
      
    </View>
  )
}

export default Preferences