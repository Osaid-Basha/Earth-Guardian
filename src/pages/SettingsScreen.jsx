import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Settings, 
  Bell, 
  Volume2, 
  Eye, 
  Globe, 
  Shield, 
  User, 
  Smartphone, 
  MapPin,
  ToggleLeft,
  ToggleRight,
  ChevronRight,
  Moon,
  Sun,
  Wifi,
  Battery,
  Signal
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const SettingsScreen = () => {
  const { t } = useLanguage()
  const [settings, setSettings] = useState({
    notifications: true,
    voiceAlerts: true,
    largeText: false,
    darkMode: false,
    locationTracking: true,
    emergencyContacts: true,
    dataUsage: 'medium',
    language: 'en'
  })

  const toggleSetting = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const settingSections = [
    {
      title: 'Notifications & Alerts',
      icon: Bell,
      items: [
        {
          key: 'notifications',
          title: 'Push Notifications',
          description: 'Receive emergency alerts and updates',
          type: 'toggle'
        },
        {
          key: 'voiceAlerts',
          title: 'Voice Alerts',
          description: 'Audio announcements for emergencies',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Accessibility',
      icon: Eye,
      items: [
        {
          key: 'largeText',
          title: 'Large Text',
          description: 'Increase text size for better readability',
          type: 'toggle'
        },
        {
          key: 'darkMode',
          title: 'Dark Mode',
          description: 'Switch to dark theme',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'Privacy & Security',
      icon: Shield,
      items: [
        {
          key: 'locationTracking',
          title: 'Location Tracking',
          description: 'Allow app to access your location',
          type: 'toggle'
        },
        {
          key: 'emergencyContacts',
          title: 'Emergency Contacts',
          description: 'Share location with emergency contacts',
          type: 'toggle'
        }
      ]
    },
    {
      title: 'General',
      icon: Settings,
      items: [
        {
          key: 'language',
          title: 'Language',
          description: 'English',
          type: 'select',
          options: ['English', 'Arabic', 'French', 'Spanish']
        },
        {
          key: 'dataUsage',
          title: 'Data Usage',
          description: 'Medium',
          type: 'select',
          options: ['Low', 'Medium', 'High']
        }
      ]
    }
  ]

  const deviceInfo = [
    { label: 'Device', value: 'iPhone 14 Pro', icon: Smartphone },
    { label: 'Location', value: 'Alexandria, Egypt', icon: MapPin },
    { label: 'Network', value: 'WiFi Connected', icon: Wifi },
    { label: 'Battery', value: '85%', icon: Battery },
    { label: 'Signal', value: 'Strong', icon: Signal }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
      >
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
            <Settings className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
            <p className="text-sm text-gray-500">Customize your experience</p>
          </div>
        </div>
      </motion.div>

      {/* Device Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
      >
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
          <Smartphone className="w-5 h-5" />
          <span>Device Status</span>
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {deviceInfo.map((info, index) => {
            const IconComponent = info.icon
            return (
              <div key={index} className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                <IconComponent className="w-4 h-4 text-gray-500" />
                <div>
                  <p className="text-xs text-gray-500">{info.label}</p>
                  <p className="text-sm font-medium text-gray-800">{info.value}</p>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Settings Sections */}
      <div className="px-4 mt-4 space-y-4">
        {settingSections.map((section, sectionIndex) => {
          const IconComponent = section.icon
          return (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + sectionIndex * 0.1 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100"
            >
              <div className="p-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-800 flex items-center space-x-2">
                  <IconComponent className="w-5 h-5" />
                  <span>{section.title}</span>
                </h3>
              </div>
              <div className="divide-y divide-gray-100">
                {section.items.map((item, itemIndex) => (
                  <div key={item.key} className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <div className="ml-4">
                        {item.type === 'toggle' ? (
                          <button
                            onClick={() => toggleSetting(item.key)}
                            className="relative"
                          >
                            {settings[item.key] ? (
                              <ToggleRight className="w-8 h-8 text-blue-500" />
                            ) : (
                              <ToggleLeft className="w-8 h-8 text-gray-300" />
                            )}
                          </button>
                        ) : item.type === 'select' ? (
                          <div className="flex items-center space-x-2">
                            <span className="text-sm text-gray-600">{item.description}</span>
                            <ChevronRight className="w-4 h-4 text-gray-400" />
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Emergency Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mx-4 mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-4 shadow-xl"
      >
        <div className="flex items-center space-x-3">
          <Shield className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">Emergency Settings</h3>
            <p className="text-sm opacity-90">Configure emergency contacts and alerts</p>
          </div>
        </div>
      </motion.div>

      {/* App Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="mx-4 mt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
      >
        <div className="text-center">
          <h3 className="font-semibold text-gray-800 mb-2">SafePath</h3>
          <p className="text-sm text-gray-500 mb-2">Version 1.0.0</p>
          <p className="text-xs text-gray-400">Disaster Management System</p>
        </div>
      </motion.div>
    </div>
  )
}

export default SettingsScreen
