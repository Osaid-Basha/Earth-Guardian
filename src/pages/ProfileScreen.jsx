import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  User, 
  Edit3, 
  Camera, 
  Shield, 
  Bell, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Heart,
  Users,
  Settings,
  LogOut,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Activity,
  Clock,
  Globe,
  ChevronRight
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const ProfileScreen = () => {
  const { t } = useLanguage()
  const [isEditing, setIsEditing] = useState(false)
  const [userData, setUserData] = useState({
    name: 'Osaid Basha',
    email: 'albashaosayd@gmail.com',
    phone: '+20 123 456 7890',
    location: 'Alexandria, Egypt',
    joinDate: 'January 2024',
    avatar: null,
    emergencyContacts: [
      { name: 'Fatima Hassan', phone: '+20 987 654 3210', relation: 'Sister' },
      { name: 'Mohamed Ali', phone: '+20 555 123 4567', relation: 'Brother' },
      { name: 'Emergency Services', phone: '911', relation: 'Emergency' }
    ],
    preferences: {
      notifications: true,
      locationSharing: true,
      emergencyAlerts: true,
      weatherUpdates: true,
      darkMode: false
    },
    stats: {
      alertsReceived: 12,
      safeZonesVisited: 8,
      emergencyCalls: 2,
      daysActive: 45
    }
  })

  const achievements = [
    { id: 1, title: 'First Alert', description: 'Received your first emergency alert', icon: Bell, earned: true, date: 'Jan 15, 2024' },
    { id: 2, title: 'Safety First', description: 'Visited 5 safe zones', icon: Shield, earned: true, date: 'Feb 3, 2024' },
    { id: 3, title: 'Weather Watcher', description: 'Checked weather 30 days in a row', icon: Globe, earned: false, date: null },
    { id: 4, title: 'Emergency Ready', description: 'Completed emergency preparedness course', icon: Award, earned: true, date: 'Mar 10, 2024' },
    { id: 5, title: 'Community Helper', description: 'Helped 3 people during emergencies', icon: Users, earned: false, date: null }
  ]

  const recentActivity = [
    { id: 1, action: 'Received flood alert', time: '2 hours ago', type: 'alert', icon: AlertCircle },
    { id: 2, action: 'Checked weather forecast', time: '4 hours ago', type: 'info', icon: Globe },
    { id: 3, action: 'Updated emergency contacts', time: '1 day ago', type: 'update', icon: Edit3 },
    { id: 4, action: 'Visited Central Shelter', time: '2 days ago', type: 'visit', icon: MapPin },
    { id: 5, action: 'Completed safety quiz', time: '3 days ago', type: 'achievement', icon: Award }
  ]

  const getActivityColor = (type) => {
    const colors = {
      alert: 'text-red-500 bg-red-100',
      info: 'text-blue-500 bg-blue-100',
      update: 'text-green-500 bg-green-100',
      visit: 'text-purple-500 bg-purple-100',
      achievement: 'text-yellow-500 bg-yellow-100'
    }
    return colors[type] || 'text-gray-500 bg-gray-100'
  }

  const getActivityIcon = (type) => {
    const icons = {
      alert: AlertCircle,
      info: Globe,
      update: Edit3,
      visit: MapPin,
      achievement: Award
    }
    return icons[type] || Activity
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Profile</h1>
              <p className="text-sm text-gray-500">Manage your account</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
          >
            <Edit3 className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </motion.div>

      {/* Profile Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
      >
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <button className="absolute bottom-0 right-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
              <Camera className="w-4 h-4" />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mt-4">{userData.name}</h2>
          <p className="text-gray-500">{userData.email}</p>
          <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{userData.location}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>Joined {userData.joinDate}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Your Stats</h3>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-blue-600">{userData.stats.alertsReceived}</div>
            <div className="text-sm text-gray-500">Alerts Received</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-green-600">{userData.stats.safeZonesVisited}</div>
            <div className="text-sm text-gray-500">Safe Zones Visited</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-red-600">{userData.stats.emergencyCalls}</div>
            <div className="text-sm text-gray-500">Emergency Calls</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg text-center">
            <div className="text-2xl font-bold text-purple-600">{userData.stats.daysActive}</div>
            <div className="text-sm text-gray-500">Days Active</div>
          </div>
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
          {userData.emergencyContacts.map((contact, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">{contact.name}</div>
                    <div className="text-sm text-gray-500">{contact.relation}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{contact.phone}</span>
                  <button className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
                    <Phone className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Achievements</h3>
        <div className="space-y-2">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon
            return (
              <div key={achievement.id} className={`p-4 rounded-xl shadow-lg ${
                achievement.earned ? 'bg-white/80 backdrop-blur-sm' : 'bg-gray-100'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    achievement.earned ? 'bg-yellow-100' : 'bg-gray-200'
                  }`}>
                    <IconComponent className={`w-5 h-5 ${
                      achievement.earned ? 'text-yellow-600' : 'text-gray-400'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{achievement.title}</div>
                    <div className="text-sm text-gray-500">{achievement.description}</div>
                    {achievement.earned && achievement.date && (
                      <div className="text-xs text-gray-400 mt-1">Earned on {achievement.date}</div>
                    )}
                  </div>
                  {achievement.earned && (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Recent Activity</h3>
        <div className="space-y-2">
          {recentActivity.map((activity) => {
            const ActivityIcon = getActivityIcon(activity.type)
            return (
              <div key={activity.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getActivityColor(activity.type)}`}>
                    <ActivityIcon className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{activity.action}</div>
                    <div className="text-sm text-gray-500 flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </motion.div>

      {/* Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Account Settings</h3>
        <div className="space-y-2">
          <button className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Settings className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">General Settings</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">Privacy & Security</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-full bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex items-center space-x-3">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="font-medium text-gray-800">Notifications</span>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </button>
          <button className="w-full bg-red-50 rounded-xl p-4 shadow-lg flex items-center justify-between hover:bg-red-100 transition-colors">
            <div className="flex items-center space-x-3">
              <LogOut className="w-5 h-5 text-red-600" />
              <span className="font-medium text-red-600">Sign Out</span>
            </div>
            <ChevronRight className="w-4 h-4 text-red-400" />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

export default ProfileScreen