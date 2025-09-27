import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, Shield, BookOpen, BarChart3, Settings, User, WifiOff, AlertTriangle, Cloud } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import { motion, AnimatePresence } from 'framer-motion'

const BottomNavigation = () => {
  const { t } = useLanguage()
  const location = useLocation()
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  React.useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const navItems = [
    {
      path: '/',
      icon: Home,
      label: t('home')
    },
    {
      path: '/safe-zones',
      icon: Shield,
      label: t('safeZones')
    },
    {
      path: '/education',
      icon: BookOpen,
      label: 'Education'
    },
    {
      path: '/analytics',
      icon: BarChart3,
      label: 'Analytics'
    },
    {
      path: '/profile',
      icon: User,
      label: 'Profile'
    }
  ]

  const quickActions = [
    {
      path: '/emergency',
      icon: AlertTriangle,
      label: 'Emergency',
      color: 'red'
    },
    {
      path: '/weather',
      icon: Cloud,
      label: 'Weather',
      color: 'blue'
    },
    {
      path: '/offline',
      icon: WifiOff,
      label: 'Offline',
      color: 'orange'
    }
  ]

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white/90 backdrop-blur-sm border-t border-gray-200 shadow-lg">
      {/* Quick Actions */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex justify-center space-x-2">
          {quickActions.map((action) => {
            const IconComponent = action.icon
            return (
              <Link
                key={action.path}
                to={action.path}
                className={`p-2 rounded-xl transition-all ${
                  action.color === 'red' ? 'bg-red-100 text-red-600 hover:bg-red-200' :
                  action.color === 'blue' ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' :
                  'bg-orange-100 text-orange-600 hover:bg-orange-200'
                }`}
              >
                <IconComponent className="w-4 h-4" />
              </Link>
            )
          })}
        </div>
      </div>

      {/* Main Navigation */}
      <div className="flex">
        {navItems.map((item, index) => {
          const IconComponent = item.icon
          const isActive = location.pathname === item.path
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className="flex-1 flex flex-col items-center justify-center py-3 px-1 transition-colors relative"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-full"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <IconComponent className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-gray-500'}`} />
              </motion.div>
              <span className={`text-xs font-medium mt-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>

      {/* Connection Status */}
      <AnimatePresence>
        {!isOnline && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="px-4 py-2 bg-orange-100 border-t border-orange-200"
          >
            <div className="flex items-center justify-center space-x-2 text-orange-600">
              <WifiOff className="w-4 h-4" />
              <span className="text-xs font-medium">Offline Mode</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BottomNavigation