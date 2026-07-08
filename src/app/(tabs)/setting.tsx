import { createSettingsStyles } from '@/assets/styles/setting.styles'
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressStats from '../../../components/ProgressStats'

const setting = () => {
  const [isAurosync,seIsAutosync] = useState(true)
  const [isNotification,setIsNotification] = useState(true)

  const {colors,isDarkMode ,toggleDarkMode} = useTheme()

  const settingStyles = createSettingsStyles(colors)


  return (
    <LinearGradient colors={colors.gradients.background} style={settingStyles.container}>
      <SafeAreaView style={settingStyles.safeArea}>
        {/* HEADER */}
        <View style={settingStyles.header}>
          <View style={settingStyles.titleContainer}>
            <LinearGradient colors={colors.gradients.primary} style={settingStyles.iconContainer}>
              <Ionicons name="settings" size={28} color="#ffffff" />
            </LinearGradient>
            <Text style={settingStyles.title}>Settings</Text>
          </View>
        </View>

        <ScrollView
          style={settingStyles.scrollView}
          contentContainerStyle={settingStyles.content}
          showsVerticalScrollIndicator={false}
        >
          <ProgressStats />
          
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

export default setting