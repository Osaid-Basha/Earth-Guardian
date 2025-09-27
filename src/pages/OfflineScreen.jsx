import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  WifiOff, 
  Wifi, 
  Download, 
  Map, 
  Shield, 
  BookOpen, 
  Phone, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  RefreshCw,
  Signal,
  Battery,
  CloudOff
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const OfflineScreen = () => {
  const { t } = useLanguage()
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [offlineData, setOfflineData] = useState({
    shelters: [],
    emergencyContacts: [],
    safetyTips: [],
    maps: [],
    lastSync: null
  })
  const [syncProgress, setSyncProgress] = useState(0)
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    // Load offline data
    loadOfflineData()

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const loadOfflineData = () => {
    // Mock offline data
    setOfflineData({
      shelters: [
        { id: 1, name: 'Central Emergency Shelter', address: '123 Main Street', distance: '0.8 km', status: 'available' },
        { id: 2, name: 'Community Center', address: '456 Oak Avenue', distance: '1.2 km', status: 'limited' },
        { id: 3, name: 'School Gymnasium', address: '789 Pine Street', distance: '2.1 km', status: 'full' }
      ],
      emergencyContacts: [
        { name: 'Emergency Services', number: '911' },
        { name: 'Local Police', number: '112' },
        { name: 'Fire Department', number: '113' },
        { name: 'Medical Emergency', number: '114' }
      ],
      safetyTips: [
        { title: 'Flood Safety', tips: ['Move to higher ground', 'Avoid walking through flood waters', 'Turn off electricity if safe'] },
        { title: 'Fire Safety', tips: ['Evacuate immediately', 'Close all windows and doors', 'Call emergency services'] },
        { title: 'Earthquake Safety', tips: ['Drop, cover, and hold on', 'Stay indoors until shaking stops', 'Check for injuries after'] }
      ],
      maps: [
        { name: 'Downtown Area', size: '2.3 MB', downloaded: true },
        { name: 'Emergency Routes', size: '1.8 MB', downloaded: true },
        { name: 'Safe Zones Map', size: '3.1 MB', downloaded: false }
      ],
      lastSync: '2 hours ago'
    })
  }

  const syncData = async () => {
    setIsSyncing(true)
    setSyncProgress(0)

    // Simulate sync process
    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 200))
      setSyncProgress(i)
    }

    setIsSyncing(false)
    setOfflineData(prev => ({
      ...prev,
      lastSync: 'Just now'
    }))
  }

  const downloadMap = (mapName) => {
    // Simulate map download
    console.log(`Downloading ${mapName}...`)
  }

  const offlineFeatures = [
    {
      title: 'Emergency Contacts',
      description: 'Access emergency numbers offline',
      icon: Phone,
      available: true,
      count: offlineData.emergencyContacts.length
    },
    {
      title: 'Safe Zones',
      description: 'View nearby shelters without internet',
      icon: Shield,
      available: true,
      count: offlineData.shelters.length
    },
    {
      title: 'Safety Tips',
      description: 'Emergency preparedness guides',
      icon: BookOpen,
      available: true,
      count: offlineData.safetyTips.length
    },
    {
      title: 'Offline Maps',
      description: 'Navigate without internet connection',
      icon: Map,
      available: true,
      count: offlineData.maps.filter(m => m.downloaded).length
    },
    {
      title: 'Smart Assistant',
      description: 'AI assistant works offline',
      icon: Database,
      available: true,
      count: 'Active'
    },
    {
      title: 'Emergency Kit',
      description: 'Checklist and guides',
      icon: Shield,
      available: true,
      count: 'Complete'
    }
  ]

  if (isOnline) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pb-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Wifi className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">Online Mode</h1>
                <p className="text-sm text-green-600">Connected to internet</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-green-600 font-medium">ONLINE</span>
            </div>
          </div>
        </motion.div>

        {/* Online Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-4 mt-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-6 shadow-xl"
        >
          <div className="flex items-center space-x-3">
            <Wifi className="w-8 h-8" />
            <div>
              <h2 className="text-xl font-bold">You're Online!</h2>
              <p className="text-sm opacity-90">All features are available with internet connection</p>
            </div>
          </div>
        </motion.div>

        {/* Sync Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-4 mt-4"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-gray-800">Data Sync</h3>
              <span className="text-sm text-gray-500">Last sync: {offlineData.lastSync}</span>
            </div>
            <button
              onClick={syncData}
              disabled={isSyncing}
              className="w-full bg-blue-500 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 hover:bg-blue-600 transition-colors disabled:opacity-50"
            >
              {isSyncing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Syncing... {syncProgress}%</span>
                </>
              ) : (
                <>
                  <RefreshCw className="w-4 h-4" />
                  <span>Sync Now</span>
                </>
              )}
            </button>
            {isSyncing && (
              <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${syncProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
              <WifiOff className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Offline Mode</h1>
              <p className="text-sm text-orange-600">Limited functionality available</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-xs text-orange-600 font-medium">OFFLINE</span>
          </div>
        </div>
      </motion.div>

      {/* Offline Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 shadow-xl"
      >
        <div className="flex items-center space-x-3">
          <WifiOff className="w-8 h-8" />
          <div>
            <h2 className="text-xl font-bold">You're Offline</h2>
            <p className="text-sm opacity-90">Some features are limited without internet connection</p>
          </div>
        </div>
      </motion.div>

      {/* Available Features */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Available Offline Features</h3>
        <div className="space-y-3">
          {offlineFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    feature.available ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      feature.available ? 'text-green-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{feature.title}</h4>
                    <p className="text-sm text-gray-500">{feature.description}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-800">{feature.count}</div>
                    <div className="text-xs text-gray-500">items</div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Emergency Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Emergency Contacts</h3>
        <div className="space-y-2">
          {offlineData.emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <Phone className="w-4 h-4 text-red-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.number}</div>
                  </div>
                </div>
                <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Offline Maps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Offline Maps</h3>
        <div className="space-y-2">
          {offlineData.maps.map((map, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    map.downloaded ? 'bg-green-100' : 'bg-gray-100'
                  }`}>
                    {map.downloaded ? (
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    ) : (
                      <CloudOff className="w-4 h-4 text-gray-400" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{map.name}</div>
                    <div className="text-sm text-gray-500">{map.size}</div>
                  </div>
                </div>
                <button
                  onClick={() => downloadMap(map.name)}
                  disabled={map.downloaded}
                  className={`p-2 rounded-lg transition-colors ${
                    map.downloaded
                      ? 'bg-green-500 text-white cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Offline Smart Assistant */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 mt-4"
      >
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3 mb-3">
            <Database className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Offline Smart Assistant</h4>
              <p className="text-sm opacity-90">AI assistant works without internet</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-sm mb-2">Ask me anything about emergency procedures:</p>
            <div className="space-y-1">
              <div className="text-xs opacity-75">• "What should I do during a flood?"</div>
              <div className="text-xs opacity-75">• "Where is the nearest shelter?"</div>
              <div className="text-xs opacity-75">• "How to perform first aid?"</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Emergency Kit Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-4 mt-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Emergency Kit Checklist</span>
          </h3>
          <div className="space-y-2">
            {[
              'First Aid Kit',
              'Water (3 days supply)',
              'Non-perishable Food',
              'Flashlight & Batteries',
              'Radio',
              'Medications',
              'Important Documents',
              'Cash & Credit Cards'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 border-2 border-gray-300 rounded flex items-center justify-center">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                </div>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Connection Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="px-4 mt-4"
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <Signal className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Connection Tips</h4>
              <p className="text-sm opacity-90">Move to an area with better signal or connect to WiFi to access all features.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default OfflineScreen
