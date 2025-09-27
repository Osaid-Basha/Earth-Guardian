import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  CloudSnow, 
  Wind, 
  Droplets, 
  Thermometer, 
  Eye, 
  Gauge,
  AlertTriangle,
  MapPin,
  RefreshCw,
  TrendingUp,
  TrendingDown,
  Calendar,
  Clock
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const WeatherDetailScreen = () => {
  const { t } = useLanguage()
  const [currentWeather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState([])
  const [alerts, setAlerts] = useState([])
  const [selectedDay, setSelectedDay] = useState(0)

  useEffect(() => {
    // Mock weather data
    setCurrentWeather({
      location: 'Alexandria, Egypt',
      temperature: 28,
      condition: 'Partly Cloudy',
      humidity: 65,
      windSpeed: 12,
      visibility: 10,
      pressure: 1013,
      uvIndex: 6,
      feelsLike: 32,
      icon: 'partly-cloudy'
    })

    setForecast([
      {
        day: 'Today',
        date: 'Dec 26',
        high: 30,
        low: 22,
        condition: 'Partly Cloudy',
        icon: 'partly-cloudy',
        precipitation: 20,
        windSpeed: 12,
        alerts: ['High UV Index']
      },
      {
        day: 'Tomorrow',
        date: 'Dec 27',
        high: 28,
        low: 20,
        condition: 'Rain',
        icon: 'rain',
        precipitation: 80,
        windSpeed: 18,
        alerts: ['Heavy Rain Warning']
      },
      {
        day: 'Wednesday',
        date: 'Dec 28',
        high: 25,
        low: 18,
        condition: 'Storm',
        icon: 'storm',
        precipitation: 95,
        windSpeed: 25,
        alerts: ['Severe Weather Alert']
      },
      {
        day: 'Thursday',
        date: 'Dec 29',
        high: 27,
        low: 19,
        condition: 'Cloudy',
        icon: 'cloudy',
        precipitation: 40,
        windSpeed: 15,
        alerts: []
      },
      {
        day: 'Friday',
        date: 'Dec 30',
        high: 29,
        low: 21,
        condition: 'Sunny',
        icon: 'sunny',
        precipitation: 5,
        windSpeed: 8,
        alerts: []
      }
    ])

    setAlerts([
      {
        id: 1,
        type: 'warning',
        title: 'Heavy Rain Warning',
        description: 'Heavy rainfall expected tomorrow with potential flooding',
        severity: 'high',
        time: '2 hours ago'
      },
      {
        id: 2,
        type: 'info',
        title: 'High UV Index',
        description: 'UV index is high today. Use sun protection.',
        severity: 'medium',
        time: '4 hours ago'
      },
      {
        id: 3,
        type: 'alert',
        title: 'Wind Advisory',
        description: 'Strong winds expected in the evening',
        severity: 'medium',
        time: '6 hours ago'
      }
    ])
  }, [])

  const getWeatherIcon = (condition) => {
    const icons = {
      'sunny': Sun,
      'partly-cloudy': Cloud,
      'cloudy': Cloud,
      'rain': CloudRain,
      'storm': CloudRain,
      'snow': CloudSnow
    }
    return icons[condition] || Sun
  }

  const getWeatherColor = (condition) => {
    const colors = {
      'sunny': 'text-yellow-500',
      'partly-cloudy': 'text-blue-500',
      'cloudy': 'text-gray-500',
      'rain': 'text-blue-600',
      'storm': 'text-purple-600',
      'snow': 'text-blue-300'
    }
    return colors[condition] || 'text-gray-500'
  }

  const getAlertColor = (severity) => {
    const colors = {
      'high': 'text-red-600 bg-red-100',
      'medium': 'text-yellow-600 bg-yellow-100',
      'low': 'text-blue-600 bg-blue-100'
    }
    return colors[severity] || 'text-gray-600 bg-gray-100'
  }

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning': return AlertTriangle
      case 'alert': return AlertTriangle
      case 'info': return Eye
      default: return AlertTriangle
    }
  }

  if (!currentWeather) return null

  const WeatherIcon = getWeatherIcon(currentWeather.icon)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/90 backdrop-blur-sm shadow-sm border-b border-gray-200 px-6 py-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
              <Sun className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Weather Forecast</h1>
              <p className="text-sm text-gray-500 flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{currentWeather.location}</span>
              </p>
            </div>
          </div>
          <button className="p-2 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors">
            <RefreshCw className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </motion.div>

      {/* Current Weather */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mx-4 mt-4 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl p-6 shadow-xl"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold">{currentWeather.temperature}°C</h2>
            <p className="text-lg opacity-90">{currentWeather.condition}</p>
            <p className="text-sm opacity-75">Feels like {currentWeather.feelsLike}°C</p>
          </div>
          <WeatherIcon className={`w-16 h-16 ${getWeatherColor(currentWeather.icon)}`} />
        </div>

        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <Droplets className="w-5 h-5 mx-auto mb-1 opacity-75" />
            <div className="text-sm font-medium">{currentWeather.humidity}%</div>
            <div className="text-xs opacity-75">Humidity</div>
          </div>
          <div>
            <Wind className="w-5 h-5 mx-auto mb-1 opacity-75" />
            <div className="text-sm font-medium">{currentWeather.windSpeed} km/h</div>
            <div className="text-xs opacity-75">Wind</div>
          </div>
          <div>
            <Eye className="w-5 h-5 mx-auto mb-1 opacity-75" />
            <div className="text-sm font-medium">{currentWeather.visibility} km</div>
            <div className="text-xs opacity-75">Visibility</div>
          </div>
          <div>
            <Gauge className="w-5 h-5 mx-auto mb-1 opacity-75" />
            <div className="text-sm font-medium">{currentWeather.pressure} hPa</div>
            <div className="text-xs opacity-75">Pressure</div>
          </div>
        </div>
      </motion.div>

      {/* Weather Alerts */}
      {alerts.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-4 mt-4"
        >
          <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
            <AlertTriangle className="w-5 h-5 text-orange-500" />
            <span>Weather Alerts</span>
          </h3>
          <div className="space-y-2">
            {alerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type)
              return (
                <div key={alert.id} className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border-l-4 border-orange-500">
                  <div className="flex items-start space-x-3">
                    <AlertIcon className="w-5 h-5 text-orange-500 mt-0.5" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{alert.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAlertColor(alert.severity)}`}>
                          {alert.severity.toUpperCase()}
                        </span>
                        <span className="text-xs text-gray-500">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      )}

      {/* 5-Day Forecast */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">5-Day Forecast</h3>
        <div className="space-y-2">
          {forecast.map((day, index) => {
            const DayIcon = getWeatherIcon(day.icon)
            const isSelected = selectedDay === index
            
            return (
              <motion.button
                key={index}
                onClick={() => setSelectedDay(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full p-4 rounded-xl transition-all ${
                  isSelected
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white/80 backdrop-blur-sm hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <DayIcon className={`w-6 h-6 ${isSelected ? 'text-white' : getWeatherColor(day.icon)}`} />
                    <div className="text-left">
                      <div className="font-medium">{day.day}</div>
                      <div className="text-sm opacity-75">{day.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="font-bold">{day.high}°</div>
                      <div className="text-sm opacity-75">{day.low}°</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm">{day.condition}</div>
                      <div className="text-xs opacity-75">{day.precipitation}% rain</div>
                    </div>
                    {day.alerts.length > 0 && (
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                    )}
                  </div>
                </div>
              </motion.button>
            )
          })}
        </div>
      </motion.div>

      {/* Detailed Forecast for Selected Day */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Detailed Forecast</h3>
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{forecast[selectedDay]?.high}°</div>
              <div className="text-sm text-gray-500">High Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{forecast[selectedDay]?.low}°</div>
              <div className="text-sm text-gray-500">Low Temperature</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{forecast[selectedDay]?.precipitation}%</div>
              <div className="text-sm text-gray-500">Precipitation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-800">{forecast[selectedDay]?.windSpeed} km/h</div>
              <div className="text-sm text-gray-500">Wind Speed</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Weather Tips */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="px-4 mt-4"
      >
        <h3 className="font-semibold text-gray-800 mb-3">Weather Tips</h3>
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-4 shadow-lg">
          <div className="flex items-center space-x-3">
            <Sun className="w-6 h-6" />
            <div>
              <h4 className="font-semibold">Stay Safe</h4>
              <p className="text-sm opacity-90">Check weather updates regularly and prepare for changing conditions.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default WeatherDetailScreen
