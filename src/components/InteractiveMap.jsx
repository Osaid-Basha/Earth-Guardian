import React, { useState, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { MapPin, AlertTriangle, Shield, Navigation } from 'lucide-react'
import 'leaflet/dist/leaflet.css'
import { motion } from 'framer-motion'

// Fix for default markers in react-leaflet
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

const InteractiveMap = ({ onLocationSelect, selectedLocation }) => {
  const [userLocation, setUserLocation] = useState([31.2001, 29.9187]) // Alexandria, Egypt
  const [riskZones, setRiskZones] = useState([])
  const [shelters, setShelters] = useState([])

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([position.coords.latitude, position.coords.longitude])
        },
        (error) => {
          console.log('Error getting location:', error)
        }
      )
    }

    // Mock risk zones data
    setRiskZones([
      {
        id: 1,
        center: [31.2001, 29.9187],
        radius: 1000,
        level: 'high',
        type: 'flood',
        description: 'High flood risk zone'
      },
      {
        id: 2,
        center: [31.2100, 29.9300],
        radius: 800,
        level: 'medium',
        type: 'fire',
        description: 'Medium fire risk zone'
      },
      {
        id: 3,
        center: [31.1900, 29.9000],
        radius: 600,
        level: 'low',
        type: 'earthquake',
        description: 'Low earthquake risk zone'
      }
    ])

    // Mock shelters data
    setShelters([
      {
        id: 1,
        position: [31.2050, 29.9250],
        name: 'Central Emergency Shelter',
        capacity: 'Available',
        status: 'available',
        facilities: ['Medical', 'Food', 'Water']
      },
      {
        id: 2,
        position: [31.1950, 29.9100],
        name: 'Community Center',
        capacity: 'Limited',
        status: 'limited',
        facilities: ['Food', 'Water']
      },
      {
        id: 3,
        position: [31.2200, 29.9400],
        name: 'School Gymnasium',
        capacity: 'Full',
        status: 'full',
        facilities: ['Medical', 'Food']
      }
    ])
  }, [])

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return '#ef4444'
      case 'medium': return '#f97316'
      case 'low': return '#eab308'
      default: return '#6b7280'
    }
  }

  const getShelterIcon = (status) => {
    const color = status === 'available' ? '#10b981' : status === 'limited' ? '#f59e0b' : '#ef4444'
    return new Icon({
      iconUrl: `data:image/svg+xml;base64,${btoa(`
        <svg width="25" height="41" viewBox="0 0 25 41" xmlns="http://www.w3.org/2000/svg">
          <path fill="${color}" d="M12.5 0C5.6 0 0 5.6 0 12.5c0 12.5 12.5 28.5 12.5 28.5s12.5-16 12.5-28.5C25 5.6 19.4 0 12.5 0z"/>
          <circle cx="12.5" cy="12.5" r="6" fill="white"/>
        </svg>
      `)}`,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [0, -41]
    })
  }

  const MapController = () => {
    const map = useMap()
    
    useEffect(() => {
      map.setView(userLocation, 13)
    }, [map, userLocation])

    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg"
    >
      <MapContainer
        center={userLocation}
        zoom={13}
        style={{ height: '100%', width: '100%' }}
        className="rounded-2xl"
      >
        <MapController />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Risk Zones */}
        {riskZones.map((zone) => (
          <Circle
            key={zone.id}
            center={zone.center}
            radius={zone.radius}
            pathOptions={{
              color: getRiskColor(zone.level),
              fillColor: getRiskColor(zone.level),
              fillOpacity: 0.2,
              weight: 2
            }}
          />
        ))}

        {/* Shelters */}
        {shelters.map((shelter) => (
          <Marker
            key={shelter.id}
            position={shelter.position}
            icon={getShelterIcon(shelter.status)}
            eventHandlers={{
              click: () => onLocationSelect(shelter)
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-sm">{shelter.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{shelter.capacity}</p>
                <div className="flex flex-wrap gap-1">
                  {shelter.facilities.map((facility, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded">
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* User Location */}
        <Marker position={userLocation} icon={new Icon({
          iconUrl: `data:image/svg+xml;base64,${btoa(`
            <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <circle cx="15" cy="15" r="12" fill="#3b82f6" stroke="white" stroke-width="3"/>
              <circle cx="15" cy="15" r="6" fill="white"/>
            </svg>
          `)}`,
          iconSize: [30, 30],
          iconAnchor: [15, 15]
        })}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-sm">Your Location</h3>
              <p className="text-xs text-gray-600">Current position</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* Map Controls */}
      <div className="absolute top-4 right-4 space-y-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
        >
          <Navigation className="w-5 h-5 text-gray-600" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50"
        >
          <MapPin className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>

      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <span className="text-xs font-medium">High Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
            <span className="text-xs font-medium">Medium Risk</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <span className="text-xs font-medium">Low Risk</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default InteractiveMap
