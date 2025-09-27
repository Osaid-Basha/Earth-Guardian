import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  Send, 
  MapPin, 
  Clock, 
  Users, 
  Shield, 
  Heart,
  Wifi,
  Battery,
  Signal,
  Camera,
  Mic,
  X,
  CheckCircle,
  AlertCircle,
  Upload,
  Image,
  Video,
  FileText,
  Brain,
  Zap,
  Eye,
  Volume2
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const EmergencyDetailScreen = () => {
  const { t } = useLanguage()
  const [emergencyType, setEmergencyType] = useState('flood')
  const [severity, setSeverity] = useState('high')
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'Emergency Services', number: '911', status: 'online', lastSeen: 'now' },
    { id: 2, name: 'Local Police', number: '112', status: 'online', lastSeen: '2 min ago' },
    { id: 3, name: 'Fire Department', number: '113', status: 'busy', lastSeen: '5 min ago' },
    { id: 4, name: 'Medical Emergency', number: '114', status: 'online', lastSeen: '1 min ago' }
  ])
  const [uploadedMedia, setUploadedMedia] = useState([])
  const [aiClassification, setAiClassification] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [locationData, setLocationData] = useState({
    latitude: 31.2001,
    longitude: 29.9187,
    address: 'Alexandria, Egypt'
  })

  const emergencyTypes = [
    { key: 'flood', label: 'Flood', icon: '🌊', color: 'blue' },
    { key: 'fire', label: 'Fire', icon: '🔥', color: 'red' },
    { key: 'earthquake', label: 'Earthquake', icon: '🌍', color: 'orange' },
    { key: 'storm', label: 'Storm', icon: '⛈️', color: 'purple' },
    { key: 'medical', label: 'Medical', icon: '🏥', color: 'green' },
    { key: 'other', label: 'Other', icon: '⚠️', color: 'gray' }
  ]

  const severityLevels = [
    { key: 'low', label: 'Low', color: 'green', description: 'Monitor situation' },
    { key: 'medium', label: 'Medium', color: 'yellow', description: 'Prepare for action' },
    { key: 'high', label: 'High', color: 'red', description: 'Immediate action required' },
    { key: 'critical', label: 'Critical', description: 'Life-threatening situation' }
  ]

  const mockMessages = [
    { id: 1, sender: 'Emergency Services', message: 'We have received your emergency report. Help is on the way.', time: '10:30 AM', type: 'system' },
    { id: 2, sender: 'You', message: 'There is a flood in downtown area. Water level is rising rapidly.', time: '10:28 AM', type: 'user' },
    { id: 3, sender: 'Emergency Services', message: 'Can you provide your exact location?', time: '10:31 AM', type: 'system' },
    { id: 4, sender: 'You', message: 'I am at 123 Main Street, near the central park.', time: '10:32 AM', type: 'user' },
    { id: 5, sender: 'Emergency Services', message: 'Thank you. Emergency team will arrive in 15 minutes. Stay safe and move to higher ground if possible.', time: '10:33 AM', type: 'system' }
  ]

  useEffect(() => {
    setMessages(mockMessages)
  }, [])

  const sendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'user'
      }
      setMessages([...messages, message])
      setNewMessage('')
      
      // Simulate response
      setIsTyping(true)
      setTimeout(() => {
        const response = {
          id: messages.length + 2,
          sender: 'Emergency Services',
          message: 'Message received. We are coordinating rescue efforts.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          type: 'system'
        }
        setMessages(prev => [...prev, response])
        setIsTyping(false)
      }, 2000)
    }
  }

  const getSeverityColor = (level) => {
    const colors = {
      low: 'text-green-600 bg-green-100',
      medium: 'text-yellow-600 bg-yellow-100',
      high: 'text-red-600 bg-red-100',
      critical: 'text-red-800 bg-red-200'
    }
    return colors[level] || colors.high
  }

  const getEmergencyIcon = (type) => {
    const emergency = emergencyTypes.find(e => e.key === type)
    return emergency ? emergency.icon : '⚠️'
  }

  // AI Classification function
  const analyzeEmergency = async () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAiClassification({
        type: 'Flood Emergency',
        confidence: 87,
        severity: 'High',
        description: 'AI detected flood conditions with high water levels',
        recommendations: [
          'Evacuate to higher ground immediately',
          'Avoid walking through flood waters',
          'Turn off electricity if safe to do so'
        ]
      })
      setIsAnalyzing(false)
    }, 3000)
  }

  // Media upload handler
  const handleMediaUpload = (type) => {
    const newMedia = {
      id: Date.now(),
      type: type,
      name: `${type}_${Date.now()}.${type === 'image' ? 'jpg' : 'mp4'}`,
      size: '2.3 MB',
      timestamp: new Date().toLocaleTimeString()
    }
    setUploadedMedia([...uploadedMedia, newMedia])
    
    // Trigger AI analysis when media is uploaded
    if (uploadedMedia.length === 0) {
      analyzeEmergency()
    }
  }

  // Send emergency report
  const sendEmergencyReport = () => {
    const report = {
      type: emergencyType,
      severity: severity,
      location: locationData,
      media: uploadedMedia,
      aiClassification: aiClassification,
      timestamp: new Date().toISOString()
    }
    
    console.log('Emergency Report Sent:', report)
    
    // Add to messages
    const message = {
      id: messages.length + 1,
      sender: 'You',
      message: `Emergency report sent: ${emergencyType} - ${severity} severity`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'user'
    }
    setMessages([...messages, message])
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-red-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Emergency Detail</h1>
              <p className="text-sm text-gray-500">Active emergency response</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-red-600 font-medium">ACTIVE</span>
          </div>
        </div>
      </motion.div>

      {/* Emergency Status */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">{getEmergencyIcon(emergencyType)}</span>
            <div>
              <h2 className="text-xl font-bold">Flood Emergency</h2>
              <p className="text-sm opacity-90">Downtown Area - High Risk</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold">CRITICAL</div>
            <div className="text-xs opacity-75">Immediate Action</div>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold">15 min</div>
            <div className="text-xs opacity-75">ETA</div>
          </div>
          <div>
            <div className="text-lg font-bold">3</div>
            <div className="text-xs opacity-75">Units</div>
          </div>
          <div>
            <div className="text-lg font-bold">156</div>
            <div className="text-xs opacity-75">Affected</div>
          </div>
        </div>
      </motion.div>

      {/* AI Classification Results */}
      {aiClassification && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mx-4 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-4 shadow-xl"
        >
          <div className="flex items-center space-x-3 mb-3">
            <Brain className="w-6 h-6" />
            <div>
              <h3 className="font-bold text-lg">AI Classification</h3>
              <p className="text-sm opacity-90">AI Analysis Complete</p>
            </div>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">{aiClassification.type}</span>
              <span className="text-sm opacity-75">{aiClassification.confidence}% confidence</span>
            </div>
            <p className="text-sm opacity-90 mb-2">{aiClassification.description}</p>
            <div className="space-y-1">
              {aiClassification.recommendations.map((rec, index) => (
                <div key={index} className="flex items-center space-x-2 text-xs">
                  <Zap className="w-3 h-3" />
                  <span>{rec}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Media Upload Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>Upload Media</span>
        </h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <button
            onClick={() => handleMediaUpload('image')}
            className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center hover:bg-gray-100 transition-colors"
          >
            <Image className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <span className="text-xs font-medium">Photo</span>
          </button>
          <button
            onClick={() => handleMediaUpload('video')}
            className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center hover:bg-gray-100 transition-colors"
          >
            <Video className="w-6 h-6 text-red-500 mx-auto mb-2" />
            <span className="text-xs font-medium">Video</span>
          </button>
          <button
            onClick={() => handleMediaUpload('audio')}
            className="p-4 bg-white/80 backdrop-blur-sm rounded-xl text-center hover:bg-gray-100 transition-colors"
          >
            <Mic className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <span className="text-xs font-medium">Audio</span>
          </button>
        </div>
        
        {/* Uploaded Media */}
        {uploadedMedia.length > 0 && (
          <div className="space-y-2">
            {uploadedMedia.map((media) => (
              <div key={media.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {media.type === 'image' && <Image className="w-5 h-5 text-blue-500" />}
                  {media.type === 'video' && <Video className="w-5 h-5 text-red-500" />}
                  {media.type === 'audio' && <Mic className="w-5 h-5 text-green-500" />}
                  <div>
                    <div className="font-medium text-sm">{media.name}</div>
                    <div className="text-xs text-gray-500">{media.size} • {media.timestamp}</div>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </motion.div>

      {/* Emergency Type Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Emergency Type</h3>
        <div className="grid grid-cols-3 gap-2">
          {emergencyTypes.map((type) => (
            <button
              key={type.key}
              onClick={() => setEmergencyType(type.key)}
              className={`p-3 rounded-xl text-center transition-all ${
                emergencyType === type.key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="text-2xl mb-1">{type.icon}</div>
              <div className="text-xs font-medium">{type.label}</div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Severity Level */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Severity Level</h3>
        <div className="space-y-2">
          {severityLevels.map((level) => (
            <button
              key={level.key}
              onClick={() => setSeverity(level.key)}
              className={`w-full p-3 rounded-xl text-left transition-all ${
                severity === level.key
                  ? 'bg-blue-50 border-2 border-blue-500'
                  : 'bg-white/80 backdrop-blur-sm hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">{level.label}</div>
                  <div className="text-sm text-gray-500">{level.description}</div>
                </div>
                {severity === level.key && (
                  <CheckCircle className="w-5 h-5 text-blue-500" />
                )}
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contacts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Emergency Contacts</h3>
        <div className="space-y-2">
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${
                    contact.status === 'online' ? 'bg-green-500' :
                    contact.status === 'busy' ? 'bg-yellow-500' : 'bg-gray-400'
                  }`}></div>
                  <div>
                    <div className="font-medium text-gray-800">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.number}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Chat Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Emergency Communication</h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg h-64 flex flex-col">
          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <div className="text-sm font-medium mb-1">{message.sender}</div>
                    <div className="text-sm">{message.message}</div>
                    <div className="text-xs opacity-75 mt-1">{message.time}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={sendMessage}
                className="p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Send Emergency Report */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-4 mt-4"
      >
        <button
          onClick={sendEmergencyReport}
          className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white p-4 rounded-2xl font-semibold flex items-center justify-center space-x-2 shadow-2xl"
        >
          <Send className="w-5 h-5" />
          <span>Report Emergency</span>
        </button>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="px-4 mt-4 grid grid-cols-2 gap-3"
      >
        <button className="bg-red-500 text-white p-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg">
          <Phone className="w-5 h-5" />
          <span>Call 911</span>
        </button>
        <button className="bg-blue-500 text-white p-4 rounded-xl font-semibold flex items-center justify-center space-x-2 shadow-lg">
          <MapPin className="w-5 h-5" />
          <span>Share Location</span>
        </button>
      </motion.div>

      {/* AI Analysis Status */}
      {isAnalyzing && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-4 mt-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl p-4 shadow-xl"
        >
          <div className="flex items-center space-x-3">
            <Brain className="w-6 h-6 animate-pulse" />
            <div>
              <h3 className="font-bold text-lg">AI Analyzing...</h3>
              <p className="text-sm opacity-90">Processing emergency data and media</p>
            </div>
          </div>
          <div className="mt-3 w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </motion.div>
      )}
    </div>
  )
}

export default EmergencyDetailScreen
