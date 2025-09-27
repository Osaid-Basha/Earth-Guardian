import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, Shield, Phone, Navigation, MapPin, Activity, TrendingUp, Users, Clock, Zap, Droplets, Flame, Mountain, Mic, Volume2 } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import InteractiveMap from '../components/InteractiveMap'

const HomeScreen = () => {
  const { t } = useLanguage()
  const [currentRiskLevel] = useState('high')
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [showEmergencyAlert, setShowEmergencyAlert] = useState(true)
  const [earlyWarnings, setEarlyWarnings] = useState([])
  const [isListening, setIsListening] = useState(false)
  const [voiceCommand, setVoiceCommand] = useState('')

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'from-red-500 to-red-600'
      case 'medium': return 'from-orange-500 to-orange-600'
      case 'low': return 'from-yellow-500 to-yellow-600'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const getRiskText = (level) => {
    switch (level) {
      case 'high': return t('evacuate')
      case 'medium': return t('prepare')
      case 'low': return t('watch')
      default: return 'Unknown'
    }
  }

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  // Initialize early warnings data
  useEffect(() => {
    setEarlyWarnings([
      {
        id: 1,
        type: 'flood',
        title: 'Flood Warning',
        confidence: 82,
        timeAhead: 36,
        severity: 'high',
        description: 'Heavy rainfall expected in your area',
        icon: Droplets,
        color: 'blue'
      },
      {
        id: 2,
        type: 'fire',
        title: 'Wildfire Alert',
        confidence: 75,
        timeAhead: 24,
        severity: 'medium',
        description: 'High temperature and dry conditions detected',
        icon: Flame,
        color: 'red'
      },
      {
        id: 3,
        type: 'earthquake',
        title: 'Seismic Activity',
        confidence: 45,
        timeAhead: 12,
        severity: 'low',
        description: 'Minor seismic activity detected in the region',
        icon: Mountain,
        color: 'orange'
      }
    ])
  }, [])

  // Voice command handling
  const startListening = () => {
    setIsListening(true)
    // Simulate voice recognition
    setTimeout(() => {
      setVoiceCommand('Where is the nearest shelter?')
      setIsListening(false)
    }, 2000)
  }

  const stopListening = () => {
    setIsListening(false)
  }

  const stats = [
    { label: 'Active Alerts', value: '3', icon: AlertTriangle, color: 'text-red-500' },
    { label: 'Safe Zones', value: '12', icon: Shield, color: 'text-green-500' },
    { label: 'Evacuated', value: '156', icon: Users, color: 'text-blue-500' },
    { label: 'Risk Level', value: 'High', icon: TrendingUp, color: 'text-orange-500' }
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t('appName')}
            </h1>
            <p className="text-sm text-gray-500">Disaster Management System</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-gray-500">Live</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 py-4"
      >
        <div className="grid grid-cols-2 gap-3">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                  <IconComponent className={`w-6 h-6 ${stat.color}`} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Early Warning System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>{t('earlyWarning')}</span>
        </h3>
        <div className="space-y-3">
          {earlyWarnings.map((warning, index) => {
            const IconComponent = warning.icon
            return (
              <motion.div
                key={warning.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`bg-gradient-to-r ${
                  warning.severity === 'high' ? 'from-red-500 to-red-600' :
                  warning.severity === 'medium' ? 'from-orange-500 to-orange-600' :
                  'from-yellow-500 to-yellow-600'
                } text-white rounded-2xl p-4 shadow-lg`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold text-lg">{warning.title}</h4>
                      <p className="text-sm opacity-90">{warning.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">{warning.confidence}%</div>
                    <div className="text-xs opacity-75">{t('confidenceLevel')}</div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{warning.timeAhead} {t('hoursAhead')}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-sm">{t('voiceAlert')}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Smart Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-4 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-4 shadow-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{t('smartAssistant')}</h3>
              <p className="text-sm opacity-90">{t('voiceCommands')}</p>
            </div>
          </div>
          <button
            onClick={isListening ? stopListening : startListening}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
              isListening 
                ? 'bg-red-500 animate-pulse' 
                : 'bg-white/20 hover:bg-white/30'
            }`}
          >
            <Mic className="w-6 h-6" />
          </button>
        </div>
        {voiceCommand && (
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-sm">"{voiceCommand}"</p>
            <p className="text-xs opacity-75 mt-1">Smart Assistant: Nearest shelter is 0.8 km away on Main Street</p>
          </div>
        )}
      </motion.div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-4 mt-4"
      >
        <InteractiveMap onLocationSelect={handleLocationSelect} selectedLocation={selectedLocation} />
      </motion.div>

      {/* Emergency Alert Card */}
      {showEmergencyAlert && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="mx-4 mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-2xl"
        >
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-8 h-8 flex-shrink-0 animate-pulse" />
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">{t('alertTitle')}</h3>
              <p className="text-sm opacity-90 mb-4">{t('alertMessage')}</p>
              <div className="flex space-x-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-red-600 font-semibold py-2 px-4 rounded-xl flex-1 flex items-center justify-center space-x-2"
                >
                  <Shield className="w-4 h-4" />
                  <span>{t('viewSafeZones')}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-700 text-white font-semibold py-2 px-4 rounded-xl flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>{t('sos')}</span>
                </motion.button>
              </div>
            </div>
            <button
              onClick={() => setShowEmergencyAlert(false)}
              className="text-white/70 hover:text-white text-xl"
            >
              ×
            </button>
          </div>
        </motion.div>
      )}

      {/* SOS Emergency Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mx-4 mt-4"
      >
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-2xl flex items-center justify-center space-x-3"
        >
          <AlertTriangle className="w-8 h-8 animate-pulse" />
          <div className="text-center">
            <h3 className="text-xl font-bold">{t('sos')}</h3>
            <p className="text-sm opacity-90">{t('reportEmergency')}</p>
          </div>
        </motion.button>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mx-4 mt-4 grid grid-cols-2 gap-4"
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{t('safeZones')}</h3>
              <p className="text-xs text-gray-500">{t('evacuationMap')}</p>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
        >
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{t('disasterTips')}</h3>
              <p className="text-xs text-gray-500">{t('interactiveScenarios')}</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Selected Location Info */}
      {selectedLocation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
        >
          <h3 className="font-semibold text-gray-800 mb-2">Selected Location</h3>
          <p className="text-sm text-gray-600">{selectedLocation.name}</p>
          <p className="text-xs text-gray-500">Status: {selectedLocation.capacity}</p>
        </motion.div>
      )}
    </div>
  )
}

export default HomeScreen