import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Shield, 
  Heart, 
  Wheat, 
  Car, 
  Home, 
  DollarSign, 
  TreePine, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  TrendingUp,
  Users,
  BarChart3,
  Satellite,
  Globe
} from 'lucide-react'

const GovernmentDecisionSystem = () => {
  const [selectedPhase, setSelectedPhase] = useState('before')
  const [selectedInstitution, setSelectedInstitution] = useState(null)

  const phases = [
    {
      id: 'before',
      title: 'Pre-Disaster',
      subtitle: 'Prediction & Prevention',
      color: 'from-blue-500 to-cyan-500',
      icon: AlertTriangle,
      description: 'Analysis of vegetation changes, humidity, cloud movement, or earth crust changes'
    },
    {
      id: 'during',
      title: 'During Disaster',
      subtitle: 'Real-time Monitoring',
      color: 'from-red-500 to-orange-500',
      icon: Clock,
      description: 'Real-time fire/flood maps + disaster movement direction'
    },
    {
      id: 'after',
      title: 'Post-Disaster',
      subtitle: 'Response & Recovery Management',
      color: 'from-green-500 to-emerald-500',
      icon: TrendingUp,
      description: 'Damage assessment (destroyed buildings, burned agricultural land, flooded areas)'
    }
  ]

  const institutions = {
    before: [
      {
        name: 'Ministry of Agriculture',
        icon: Wheat,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        alerts: ['Drought probability warnings', 'Crop yield predictions', 'Limited irrigation advice']
      },
      {
        name: 'Civil Defense',
        icon: Shield,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        alerts: ['Fire probability maps', 'Fire risk assessment', 'Prevention plans']
      },
      {
        name: 'Ministry of Health',
        icon: Heart,
        color: 'text-pink-600',
        bgColor: 'bg-pink-100',
        alerts: ['Dust storm warnings affecting asthma patients', 'Health recommendations', 'Hospital preparedness']
      }
    ],
    during: [
      {
        name: 'Civil Defense',
        icon: Shield,
        color: 'text-red-600',
        bgColor: 'bg-red-100',
        alerts: ['Fire spread paths and blocked roads', 'Field team locations', 'Rescue priorities']
      },
      {
        name: 'Ministry of Transport',
        icon: Car,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100',
        alerts: ['Damaged infrastructure identification (bridges, roads)', 'Alternative safe routes', 'Main road status']
      },
      {
        name: 'Ministry of Interior',
        icon: Users,
        color: 'text-purple-600',
        bgColor: 'bg-purple-100',
        alerts: ['Updated population evacuation maps', 'Temporary shelter centers', 'Population distribution plan']
      }
    ],
    after: [
      {
        name: 'Ministry of Finance',
        icon: DollarSign,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100',
        alerts: ['Economic loss reports for compensation estimation', 'Reconstruction costs', 'Required financial aid']
      },
      {
        name: 'Ministry of Housing',
        icon: Home,
        color: 'text-indigo-600',
        bgColor: 'bg-indigo-100',
        alerts: ['Maps of areas needing reconstruction', 'Residential damage assessment', 'Temporary housing plan']
      },
      {
        name: 'Ministry of Environment',
        icon: TreePine,
        color: 'text-green-600',
        bgColor: 'bg-green-100',
        alerts: ['Environmental impact assessment on forests and water bodies', 'Reforestation plan', 'Biodiversity protection']
      }
    ]
  }

  const nasaDataSources = [
    { name: 'MODIS', description: 'Vegetation and fire monitoring' },
    { name: 'Landsat', description: 'Land change analysis' },
    { name: 'GOES', description: 'Weather and cloud tracking' },
    { name: 'GRACE', description: 'Groundwater monitoring' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Government Decision Support System
            </h1>
            <p className="text-sm text-gray-500 mt-1">Connecting NASA data with government institutions</p>
          </div>
          <div className="flex items-center space-x-2">
            <Satellite className="w-6 h-6 text-blue-500" />
            <span className="text-xs text-gray-500">NASA Data</span>
          </div>
        </div>
      </motion.div>

      {/* NASA Data Sources */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 py-4"
      >
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <Globe className="w-5 h-5 text-blue-500" />
            <span>NASA Data Sources</span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {nasaDataSources.map((source, index) => (
              <motion.div
                key={source.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-blue-50 rounded-xl p-3 border border-blue-200"
              >
                <h4 className="font-medium text-blue-800 text-sm">{source.name}</h4>
                <p className="text-xs text-blue-600 mt-1">{source.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Phase Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 py-4"
      >
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <BarChart3 className="w-5 h-5" />
          <span>System Phases</span>
        </h3>
        <div className="grid grid-cols-3 gap-3">
          {phases.map((phase) => {
            const IconComponent = phase.icon
            const isSelected = selectedPhase === phase.id
            return (
              <motion.button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-4 rounded-2xl text-right transition-all duration-300 ${
                  isSelected
                    ? `bg-gradient-to-r ${phase.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 shadow-sm border border-gray-200'
                }`}
              >
                <IconComponent className={`w-6 h-6 mb-2 ${isSelected ? 'text-white' : 'text-gray-500'}`} />
                <h4 className="font-bold text-sm">{phase.title}</h4>
                <p className="text-xs opacity-75 mt-1">{phase.subtitle}</p>
                {isSelected && (
                  <motion.div
                    layoutId="selectedPhase"
                    className="absolute inset-0 bg-white/20 rounded-2xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Phase Description */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 py-4"
      >
        <div className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100">
          <h4 className="font-semibold text-gray-800 mb-2">
            {phases.find(p => p.id === selectedPhase)?.title} - {phases.find(p => p.id === selectedPhase)?.subtitle}
          </h4>
          <p className="text-sm text-gray-600">
            {phases.find(p => p.id === selectedPhase)?.description}
          </p>
        </div>
      </motion.div>

      {/* Institutions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 py-4"
      >
        <h3 className="font-semibold text-gray-800 mb-4 flex items-center space-x-2">
          <Building2 className="w-5 h-5" />
          <span>Government Institutions</span>
        </h3>
        <div className="space-y-3">
          {institutions[selectedPhase]?.map((institution, index) => {
            const IconComponent = institution.icon
            return (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-2xl p-4 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-3 rounded-xl ${institution.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${institution.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-2">{institution.name}</h4>
                    <div className="space-y-1">
                      {institution.alerts.map((alert, alertIndex) => (
                        <div key={alertIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{alert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* System Flow */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 py-4"
      >
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-6 shadow-2xl">
          <h3 className="font-bold text-lg mb-4 flex items-center space-x-2">
            <MapPin className="w-6 h-6" />
            <span>System Flow</span>
          </h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">1</span>
              </div>
              <span className="text-sm">Receiving data from NASA satellites</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">2</span>
              </div>
              <span className="text-sm">Processing and analyzing data using AI</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">3</span>
              </div>
              <span className="text-sm">Distributing customized reports to government institutions</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold">4</span>
              </div>
              <span className="text-sm">Monitoring implementation and measuring effectiveness</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default GovernmentDecisionSystem
