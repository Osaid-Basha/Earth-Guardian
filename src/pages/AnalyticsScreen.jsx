import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  Shield, 
  Users, 
  MapPin,
  Clock,
  Activity,
  Zap,
  Droplets,
  Flame,
  Mountain,
  Eye,
  Settings,
  Send,
  Bell,
  Map,
  Layers,
  Filter,
  Download,
  RefreshCw,
  Play,
  Pause,
  Square
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const AnalyticsScreen = () => {
  const { t } = useLanguage()
  const [selectedPeriod, setSelectedPeriod] = useState('week')
  const [isMonitoring, setIsMonitoring] = useState(true)
  const [selectedLayers, setSelectedLayers] = useState(['alerts', 'shelters', 'routes'])
  const [massAlertMessage, setMassAlertMessage] = useState('')
  const [showMassAlert, setShowMassAlert] = useState(false)

  const periods = [
    { key: 'day', label: 'Today' },
    { key: 'week', label: 'This Week' },
    { key: 'month', label: 'This Month' },
    { key: 'year', label: 'This Year' }
  ]

  const disasterStats = [
    {
      type: 'Flood',
      icon: Droplets,
      color: 'blue',
      count: 12,
      trend: 'up',
      change: '+15%',
      severity: 'high'
    },
    {
      type: 'Fire',
      icon: Flame,
      color: 'red',
      count: 8,
      trend: 'down',
      change: '-5%',
      severity: 'medium'
    },
    {
      type: 'Earthquake',
      icon: Mountain,
      color: 'orange',
      count: 3,
      trend: 'up',
      change: '+25%',
      severity: 'low'
    },
    {
      type: 'Storm',
      icon: Zap,
      color: 'purple',
      count: 15,
      trend: 'up',
      change: '+8%',
      severity: 'medium'
    }
  ]

  const evacuationStats = [
    { label: 'Total Evacuated', value: '1,234', icon: Users, color: 'text-blue-600' },
    { label: 'Safe Zones Used', value: '45', icon: Shield, color: 'text-green-600' },
    { label: 'Response Time', value: '12 min', icon: Clock, color: 'text-orange-600' },
    { label: 'Alerts Sent', value: '89', icon: AlertTriangle, color: 'text-red-600' }
  ]

  const riskZones = [
    { name: 'Downtown', risk: 'High', population: '15,000', status: 'Evacuating' },
    { name: 'Midtown', risk: 'Medium', population: '8,500', status: 'Preparing' },
    { name: 'Uptown', risk: 'Low', population: '12,000', status: 'Monitoring' },
    { name: 'Eastside', risk: 'High', population: '6,200', status: 'Evacuated' }
  ]

  const mapLayers = [
    { key: 'alerts', label: 'Alerts', icon: AlertTriangle, color: 'red' },
    { key: 'shelters', label: 'Shelters', icon: Shield, color: 'green' },
    { key: 'routes', label: 'Routes', icon: Map, color: 'blue' },
    { key: 'population', label: 'Population', icon: Users, color: 'purple' },
    { key: 'weather', label: 'Weather', icon: Zap, color: 'yellow' }
  ]

  const emergencyReports = [
    { id: 1, type: 'Flood', location: 'Downtown', severity: 'High', time: '2 min ago', status: 'Active' },
    { id: 2, type: 'Fire', location: 'Eastside', severity: 'Medium', time: '15 min ago', status: 'Resolved' },
    { id: 3, type: 'Medical', location: 'Midtown', severity: 'Critical', time: '5 min ago', status: 'Active' },
    { id: 4, type: 'Earthquake', location: 'Uptown', severity: 'Low', time: '1 hour ago', status: 'Monitoring' }
  ]

  const resourceStatus = [
    { name: 'Ambulances', total: 12, available: 8, inUse: 4, color: 'red' },
    { name: 'Fire Trucks', total: 8, available: 5, inUse: 3, color: 'orange' },
    { name: 'Police Units', total: 20, available: 15, inUse: 5, color: 'blue' },
    { name: 'Rescue Teams', total: 6, available: 4, inUse: 2, color: 'green' }
  ]

  const massAlertOptions = [
    { id: 1, name: 'All Citizens', count: '125,000', icon: Users },
    { id: 2, name: 'High Risk Areas', count: '45,000', icon: AlertTriangle },
    { id: 3, name: 'Emergency Personnel', count: '2,500', icon: Shield },
    { id: 4, name: 'Government Officials', count: '150', icon: Settings }
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-600 bg-red-100'
      case 'medium': return 'text-orange-600 bg-orange-100'
      case 'low': return 'text-green-600 bg-green-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getTrendIcon = (trend) => {
    return trend === 'up' ? TrendingUp : TrendingDown
  }

  const getTrendColor = (trend) => {
    return trend === 'up' ? 'text-red-500' : 'text-green-500'
  }

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
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Disaster Analytics</h1>
              <p className="text-sm text-gray-500">Emergency Management Dashboard</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMonitoring(!isMonitoring)}
              className={`p-2 rounded-xl transition-all ${
                isMonitoring 
                  ? 'bg-red-500 text-white' 
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isMonitoring ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isMonitoring ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
              <span className="text-xs text-gray-500">{isMonitoring ? 'Live' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mass Alert System */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-2xl p-4 shadow-xl"
      >
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-3">
            <Bell className="w-6 h-6" />
            <div>
              <h3 className="font-bold text-lg">Mass Alert</h3>
              <p className="text-sm opacity-90">Send alerts to citizens</p>
            </div>
          </div>
          <button
            onClick={() => setShowMassAlert(!showMassAlert)}
            className="px-4 py-2 bg-white/20 rounded-xl text-sm font-medium hover:bg-white/30 transition-colors"
          >
            {showMassAlert ? 'Hide' : 'Send Alert'}
          </button>
        </div>
        
        {showMassAlert && (
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              {massAlertOptions.map((option) => {
                const IconComponent = option.icon
                return (
                  <div key={option.id} className="bg-white/20 rounded-xl p-3">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="w-4 h-4" />
                      <span className="text-sm font-medium">{option.name}</span>
                    </div>
                    <div className="text-xs opacity-75 mt-1">{option.count} recipients</div>
                  </div>
                )
              })}
            </div>
            <div className="flex space-x-2">
              <input
                type="text"
                value={massAlertMessage}
                onChange={(e) => setMassAlertMessage(e.target.value)}
                placeholder="Enter alert message..."
                className="flex-1 p-3 bg-white/20 rounded-xl placeholder-white/70 text-white"
              />
              <button className="px-4 py-3 bg-white text-red-500 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Period Selector */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 py-4"
      >
        <div className="flex space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg">
          {periods.map((period) => (
            <button
              key={period.key}
              onClick={() => setSelectedPeriod(period.key)}
              className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition-all ${
                selectedPeriod === period.key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Key Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mb-4"
      >
        <div className="grid grid-cols-2 gap-3">
          {evacuationStats.map((stat, index) => {
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

      {/* Disaster Statistics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Activity className="w-5 h-5" />
            <span>Disaster Incidents</span>
          </h3>
          <div className="space-y-3">
            {disasterStats.map((disaster, index) => {
              const IconComponent = disaster.icon
              const TrendIcon = getTrendIcon(disaster.trend)
              return (
                <motion.div
                  key={disaster.type}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-${disaster.color}-100`}>
                      <IconComponent className={`w-5 h-5 text-${disaster.color}-600`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{disaster.type}</h4>
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-gray-800">{disaster.count}</span>
                        <span className={`text-sm font-medium ${getTrendColor(disaster.trend)}`}>
                          {disaster.change}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendIcon className={`w-4 h-4 ${getTrendColor(disaster.trend)}`} />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(disaster.severity)}`}>
                      {disaster.severity}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Risk Zones */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <MapPin className="w-5 h-5" />
            <span>Risk Zones Status</span>
          </h3>
          <div className="space-y-3">
            {riskZones.map((zone, index) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-xl"
              >
                <div>
                  <h4 className="font-medium text-gray-800">{zone.name}</h4>
                  <p className="text-sm text-gray-500">Population: {zone.population}</p>
                </div>
                <div className="text-right">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    zone.risk === 'High' ? 'text-red-600 bg-red-100' :
                    zone.risk === 'Medium' ? 'text-orange-600 bg-orange-100' :
                    'text-green-600 bg-green-100'
                  }`}>
                    {zone.risk} Risk
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{zone.status}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Resource Management */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Resource Management</span>
          </h3>
          <div className="space-y-3">
            {resourceStatus.map((resource) => (
              <div key={resource.name} className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{resource.name}</span>
                  <span className="text-sm text-gray-500">{resource.available}/{resource.total} available</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-${resource.color}-500`}
                    style={{ width: `${(resource.available / resource.total) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Available: {resource.available}</span>
                  <span>In Use: {resource.inUse}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Emergency Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5" />
            <span>Emergency Reports</span>
          </h3>
          <div className="space-y-2">
            {emergencyReports.map((report) => (
              <div key={report.id} className="bg-gray-50 rounded-xl p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      report.status === 'Active' ? 'bg-red-500' :
                      report.status === 'Resolved' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}></div>
                    <div>
                      <div className="font-medium text-gray-800">{report.type} - {report.location}</div>
                      <div className="text-sm text-gray-500">{report.time}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(report.severity)}`}>
                      {report.severity}
                    </span>
                    <div className="text-xs text-gray-500 mt-1">{report.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Map Layers Control */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
            <Layers className="w-5 h-5" />
            <span>Map Layers</span>
          </h3>
          <div className="grid grid-cols-2 gap-2">
            {mapLayers.map((layer) => {
              const IconComponent = layer.icon
              const isSelected = selectedLayers.includes(layer.key)
              return (
                <button
                  key={layer.key}
                  onClick={() => {
                    if (isSelected) {
                      setSelectedLayers(selectedLayers.filter(l => l !== layer.key))
                    } else {
                      setSelectedLayers([...selectedLayers, layer.key])
                    }
                  }}
                  className={`p-3 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-blue-50 border-2 border-blue-500'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <IconComponent className={`w-4 h-4 text-${layer.color}-500`} />
                    <span className="text-sm font-medium">{layer.label}</span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Chart Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="px-4 mb-4"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Trend Analysis</h3>
          <div className="h-32 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Chart visualization would go here</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AnalyticsScreen
