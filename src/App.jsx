import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import SafeZonesScreen from './pages/SafeZonesScreen'
import EducationScreen from './pages/EducationScreen'
import AnalyticsScreen from './pages/AnalyticsScreen'
import SettingsScreen from './pages/SettingsScreen'
import ProfileScreen from './pages/ProfileScreen'
import EmergencyDetailScreen from './pages/EmergencyDetailScreen'
import WeatherDetailScreen from './pages/WeatherDetailScreen'
import OfflineScreen from './pages/OfflineScreen'
import BottomNavigation from './components/BottomNavigation'
import { LanguageProvider } from './hooks/useLanguage'

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans">
          <div className="max-w-md mx-auto bg-white min-h-screen shadow-2xl relative overflow-hidden">
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/safe-zones" element={<SafeZonesScreen />} />
              <Route path="/education" element={<EducationScreen />} />
              <Route path="/analytics" element={<AnalyticsScreen />} />
              <Route path="/settings" element={<SettingsScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/emergency" element={<EmergencyDetailScreen />} />
              <Route path="/weather" element={<WeatherDetailScreen />} />
              <Route path="/offline" element={<OfflineScreen />} />
            </Routes>
            <BottomNavigation />
          </div>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App