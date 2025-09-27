import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Navigation, Search, Clock, Users, Shield, Star, Wifi, Car, Heart } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'

const SafeZonesScreen = () => {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const shelters = [
    {
      id: 1,
      name: 'Central Emergency Shelter',
      address: '123 Main Street, Downtown',
      distance: '0.8 km',
      capacity: 'Available',
      status: 'available',
      phone: '+1-555-0123',
      facilities: ['Medical', 'Food', 'Water', 'Restrooms', 'WiFi'],
      rating: 4.8,
      occupancy: 45,
      maxCapacity: 200,
      lastUpdated: '2 min ago'
    },
    {
      id: 2,
      name: 'Community Center',
      address: '456 Oak Avenue, Midtown',
      distance: '1.2 km',
      capacity: 'Limited',
      status: 'limited',
      phone: '+1-555-0456',
      facilities: ['Food', 'Water', 'Restrooms', 'Parking'],
      rating: 4.2,
      occupancy: 180,
      maxCapacity: 200,
      lastUpdated: '5 min ago'
    },
    {
      id: 3,
      name: 'School Gymnasium',
      address: '789 Pine Street, Uptown',
      distance: '2.1 km',
      capacity: 'Full',
      status: 'full',
      phone: '+1-555-0789',
      facilities: ['Medical', 'Food', 'First Aid'],
      rating: 4.5,
      occupancy: 300,
      maxCapacity: 300,
      lastUpdated: '1 min ago'
    },
    {
      id: 4,
      name: 'Sports Complex',
      address: '321 Elm Street, Eastside',
      distance: '3.5 km',
      capacity: 'Available',
      status: 'available',
      phone: '+1-555-0321',
      facilities: ['Food', 'Water', 'Restrooms', 'Showers', 'WiFi', 'Parking'],
      rating: 4.7,
      occupancy: 120,
      maxCapacity: 500,
      lastUpdated: '3 min ago'
    }
  ]

  const filters = [
    { key: 'all', label: 'All', count: shelters.length },
    { key: 'available', label: 'Available', count: shelters.filter(s => s.status === 'available').length },
    { key: 'limited', label: 'Limited', count: shelters.filter(s => s.status === 'limited').length },
    { key: 'full', label: 'Full', count: shelters.filter(s => s.status === 'full').length }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100'
      case 'limited': return 'text-yellow-600 bg-yellow-100'
      case 'full': return 'text-red-600 bg-red-100'
      default: return 'text-gray-600 bg-gray-100'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return t('available')
      case 'limited': return t('limited')
      case 'full': return t('full')
      default: return t('unknown')
    }
  }

  const getOccupancyColor = (occupancy, maxCapacity) => {
    const percentage = (occupancy / maxCapacity) * 100
    if (percentage >= 90) return 'text-red-500'
    if (percentage >= 70) return 'text-yellow-500'
    return 'text-green-500'
  }

  const filteredShelters = shelters.filter(shelter => {
    const matchesSearch = shelter.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         shelter.address.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = selectedFilter === 'all' || shelter.status === selectedFilter
    return matchesSearch && matchesFilter
  })

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
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{t('safeZones')}</h1>
            <p className="text-sm text-gray-500">Find nearby emergency shelters</p>
          </div>
        </div>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 py-4"
      >
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={t('searchShelters')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
          />
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="px-4 mb-4"
      >
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setSelectedFilter(filter.key)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedFilter === filter.key
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-gray-100'
              }`}
            >
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>
      </motion.div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-4 mb-4 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl p-4 shadow-xl"
      >
        <div className="flex items-center space-x-3">
          <Phone className="w-6 h-6" />
          <div>
            <h3 className="font-semibold">{t('emergency')}</h3>
            <p className="text-sm opacity-90">{t('call911')}</p>
          </div>
        </div>
      </motion.div>

      {/* Shelters List */}
      <div className="px-4 space-y-4">
        {filteredShelters.map((shelter, index) => (
          <motion.div
            key={shelter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className="font-bold text-lg text-gray-800">{shelter.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="text-sm text-gray-600">{shelter.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{shelter.address}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Navigation className="w-4 h-4 mr-1" />
                  <span>{shelter.distance}</span>
                </div>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Updated {shelter.lastUpdated}</span>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(shelter.status)}`}>
                {getStatusText(shelter.status)}
              </div>
            </div>

            {/* Occupancy Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-600">Occupancy</span>
                <span className={`font-medium ${getOccupancyColor(shelter.occupancy, shelter.maxCapacity)}`}>
                  {shelter.occupancy}/{shelter.maxCapacity}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${
                    shelter.occupancy / shelter.maxCapacity >= 0.9 ? 'bg-red-500' :
                    shelter.occupancy / shelter.maxCapacity >= 0.7 ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(shelter.occupancy / shelter.maxCapacity) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Facilities */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {shelter.facilities.map((facility, facilityIndex) => {
                  const getFacilityIcon = (facility) => {
                    switch (facility) {
                      case 'WiFi': return Wifi
                      case 'Parking': return Car
                      case 'Medical': return Heart
                      default: return Shield
                    }
                  }
                  const FacilityIcon = getFacilityIcon(facility)
                  return (
                    <span key={facilityIndex} className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full flex items-center space-x-1">
                      <FacilityIcon className="w-3 h-3" />
                      <span>{facility}</span>
                    </span>
                  )
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="flex space-x-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>{t('directions')}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>{t('call')}</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mx-4 mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100"
      >
        <h3 className="font-semibold text-gray-800 mb-3 flex items-center space-x-2">
          <Users className="w-5 h-5" />
          <span>Shelter Status Overview</span>
        </h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-green-600">
              {shelters.filter(s => s.status === 'available').length}
            </div>
            <div className="text-xs text-gray-500">Available</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-600">
              {shelters.filter(s => s.status === 'limited').length}
            </div>
            <div className="text-xs text-gray-500">Limited</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-600">
              {shelters.filter(s => s.status === 'full').length}
            </div>
            <div className="text-xs text-gray-500">Full</div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SafeZonesScreen