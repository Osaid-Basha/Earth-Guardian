import React, { useState } from 'react'
import { Droplets, Flame, Mountain, Zap, Phone, AlertTriangle, Shield, Home, Play, Star, Trophy, Award, Gamepad2, BookOpen, Video, Headphones, Clock } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const EducationScreen = () => {
  console.log('EducationScreen starting to render')
  
  const { t } = useLanguage()
  const [expandedTip, setExpandedTip] = useState(null)
  const [survivorPoints, setSurvivorPoints] = useState(1250)
  const [currentLevel, setCurrentLevel] = useState(3)
  const [selectedCategory, setSelectedCategory] = useState('all')

  console.log('EducationScreen state initialized')

  const disasterTips = [
    {
      id: 'flood',
      icon: Droplets,
      title: 'Flood Safety',
      color: 'blue',
      tips: [
        'Move to higher ground immediately',
        'Avoid walking or driving through flood waters',
        'Turn off electricity and gas if safe to do so',
        'Listen to emergency broadcasts for updates'
      ]
    },
    {
      id: 'wildfire',
      icon: Flame,
      title: 'Wildfire Safety',
      color: 'red',
      tips: [
        'Evacuate immediately when ordered',
        'Close all windows and doors',
        'Turn off gas and electricity',
        'Wear protective clothing and mask'
      ]
    },
    {
      id: 'landslide',
      icon: Mountain,
      title: 'Landslide Safety',
      color: 'orange',
      tips: [
        'Move away from steep slopes',
        'Listen for unusual sounds like cracking',
        'Stay alert during heavy rain',
        'Have an evacuation plan ready'
      ]
    },
    {
      id: 'earthquake',
      icon: Zap,
      title: 'Earthquake Safety',
      color: 'purple',
      tips: [
        'Drop, cover, and hold on',
        'Stay indoors until shaking stops',
        'Stay away from windows and heavy objects',
        'Check for injuries and gas leaks after'
      ]
    }
  ]

  const emergencyKit = [
    { item: 'First Aid Kit', icon: Shield },
    { item: 'Water (3 days)', icon: Droplets },
    { item: 'Non-perishable Food', icon: Home },
    { item: 'Battery Radio', icon: Zap },
    { item: 'Flashlights', icon: Zap },
    { item: 'Extra Batteries', icon: Zap },
    { item: 'Medications', icon: Shield },
    { item: 'Important Documents', icon: Home }
  ]

  const emergencyNumbers = [
    { name: 'General Emergency', number: '911', icon: Phone },
    { name: 'Police', number: '911', icon: Shield },
    { name: 'Ambulance', number: '911', icon: Shield }
  ]

  const educationalGames = [
    {
      id: 1,
      title: 'Flood Survival Challenge',
      description: 'Test your flood safety knowledge',
      icon: Droplets,
      points: 100,
      difficulty: 'Easy',
      completed: true,
      type: 'quiz'
    },
    {
      id: 2,
      title: 'Fire Escape Simulator',
      description: 'Navigate through a burning building',
      icon: Flame,
      points: 150,
      difficulty: 'Medium',
      completed: false,
      type: 'simulation'
    },
    {
      id: 3,
      title: 'Earthquake Response',
      description: 'Learn proper earthquake safety',
      icon: Mountain,
      points: 200,
      difficulty: 'Hard',
      completed: false,
      type: 'interactive'
    },
    {
      id: 4,
      title: 'Emergency Kit Builder',
      description: 'Build your perfect emergency kit',
      icon: Shield,
      points: 120,
      difficulty: 'Easy',
      completed: true,
      type: 'game'
    }
  ]

  const interactiveScenarios = [
    {
      id: 1,
      title: 'Flood Emergency Response',
      description: 'What would you do during a flood?',
      icon: Droplets,
      duration: '5 min',
      points: 80,
      completed: true
    },
    {
      id: 2,
      title: 'Wildfire Evacuation',
      description: 'Plan your escape route',
      icon: Flame,
      duration: '7 min',
      points: 100,
      completed: false
    },
    {
      id: 3,
      title: 'Earthquake Safety',
      description: 'Practice drop, cover, and hold',
      icon: Mountain,
      duration: '3 min',
      points: 60,
      completed: true
    }
  ]

  const educationalVideos = [
    {
      id: 1,
      title: 'Emergency Preparedness Basics',
      duration: '10:30',
      views: '1.2K',
      thumbnail: '📹',
      points: 50
    },
    {
      id: 2,
      title: 'First Aid Fundamentals',
      duration: '15:45',
      views: '856',
      thumbnail: '🏥',
      points: 75
    },
    {
      id: 3,
      title: 'Disaster Communication',
      duration: '8:20',
      views: '634',
      thumbnail: '📡',
      points: 40
    }
  ]

  const categories = [
    { key: 'all', label: 'All', icon: BookOpen },
    { key: 'games', label: 'Games', icon: Gamepad2 },
    { key: 'videos', label: 'Videos', icon: Video },
    { key: 'scenarios', label: 'Scenarios', icon: Play }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 border-blue-200',
      red: 'bg-red-100 text-red-600 border-red-200',
      orange: 'bg-orange-100 text-orange-600 border-orange-200',
      purple: 'bg-purple-100 text-purple-600 border-purple-200'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-blue-600 text-center">
              Disaster Education
            </h1>
            <p className="text-sm text-gray-500 text-center mt-1">
              Learn how to stay safe during emergencies
            </p>
          </div>
        </div>
      </div>

      {/* Survivor Points & Level */}
      <div className="px-4 py-4">
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8" />
              <div>
                <h3 className="font-bold text-lg">Survivor Points</h3>
                <p className="text-sm opacity-90">Level {currentLevel} Survivor</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">{survivorPoints}</div>
              <div className="text-xs opacity-75">Points</div>
            </div>
          </div>
          <div className="mt-3 w-full bg-white/20 rounded-full h-2">
            <div className="bg-white h-2 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="px-4 mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                  selectedCategory === category.key
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gray-100'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{category.label}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="mx-4 mt-4 bg-red-600 text-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-center space-x-3">
          <Phone className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">{t('emergency')}</h3>
            <p className="text-sm opacity-90">{t('call911')}</p>
          </div>
        </div>
      </div>

      {/* Educational Games */}
      {(selectedCategory === 'all' || selectedCategory === 'games') && (
        <div className="px-4 mt-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <Gamepad2 className="w-5 h-5" />
            <span>Disaster Games</span>
          </h3>
          <div className="space-y-3">
            {educationalGames.map((game) => {
              const IconComponent = game.icon
              return (
                <div key={game.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{game.title}</h4>
                        <p className="text-sm text-gray-500">{game.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {game.difficulty}
                          </span>
                          <span className="text-xs text-blue-600 font-medium">
                            {game.points} points
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {game.completed && (
                        <Award className="w-5 h-5 text-green-500" />
                      )}
                      <button className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        game.completed
                          ? 'bg-green-100 text-green-600'
                          : 'bg-blue-500 text-white hover:bg-blue-600'
                      }`}>
                        {game.completed ? 'Completed' : 'Play'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Interactive Scenarios */}
      {(selectedCategory === 'all' || selectedCategory === 'scenarios') && (
        <div className="px-4 mt-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Interactive Scenarios</span>
          </h3>
          <div className="space-y-3">
            {interactiveScenarios.map((scenario) => {
              const IconComponent = scenario.icon
              return (
                <div key={scenario.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800">{scenario.title}</h4>
                        <p className="text-sm text-gray-500">{scenario.description}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Clock className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-500">{scenario.duration}</span>
                          <span className="text-xs text-blue-600 font-medium">
                            {scenario.points} points
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {scenario.completed && (
                        <Award className="w-5 h-5 text-green-500" />
                      )}
                      <button className={`px-4 py-2 rounded-xl text-sm font-medium ${
                        scenario.completed
                          ? 'bg-green-100 text-green-600'
                          : 'bg-green-500 text-white hover:bg-green-600'
                      }`}>
                        {scenario.completed ? 'Completed' : 'Start'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Educational Videos */}
      {(selectedCategory === 'all' || selectedCategory === 'videos') && (
        <div className="px-4 mt-4">
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <Video className="w-5 h-5" />
            <span>Educational Videos</span>
          </h3>
          <div className="space-y-3">
            {educationalVideos.map((video) => (
              <div key={video.id} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-16 h-12 bg-gray-200 rounded-xl flex items-center justify-center text-2xl">
                      {video.thumbnail}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{video.title}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{video.duration}</span>
                        <span className="text-xs text-gray-500">• {video.views} views</span>
                        <span className="text-xs text-blue-600 font-medium">
                          {video.points} points
                        </span>
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-xl text-sm font-medium hover:bg-red-600 flex items-center space-x-1">
                    <Play className="w-4 h-4" />
                    <span>Watch</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Disaster Tips */}
      <div className="px-4 mt-4 space-y-4">
        {disasterTips.map((disaster) => {
          const IconComponent = disaster.icon
          const isExpanded = expandedTip === disaster.id
          
          return (
            <div key={disaster.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <button
                onClick={() => setExpandedTip(isExpanded ? null : disaster.id)}
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${getColorClasses(disaster.color)}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-800">{disaster.title}</h3>
                    <p className="text-sm text-gray-500">Tap to expand</p>
                  </div>
                </div>
                <AlertTriangle className={`w-5 h-5 text-gray-400 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-4 border-t border-gray-100">
                  <div className="pt-4 space-y-2">
                    {disaster.tips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Emergency Kit */}
      <div className="mx-4 mt-6 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Essential Emergency Kit</h3>
        <div className="grid grid-cols-2 gap-3">
          {emergencyKit.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                <IconComponent className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item.item}</span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Emergency Numbers */}
      <div className="mx-4 mt-4 bg-white rounded-2xl shadow-lg p-6">
        <h3 className="font-bold text-lg text-gray-800 mb-4">Important Emergency Numbers</h3>
        <div className="space-y-3">
          {emergencyNumbers.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center space-x-3">
                  <IconComponent className="w-5 h-5 text-red-600" />
                  <span className="font-medium text-gray-800">{contact.name}</span>
                </div>
                <button className="bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {contact.number}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* More Tips Button */}
      <div className="mx-4 mt-4">
        <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:bg-blue-700 transition-colors">
          More Tips
        </button>
      </div>
    </div>
  )
}

export default EducationScreen