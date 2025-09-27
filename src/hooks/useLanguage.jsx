import React, { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en') // Default to English

  const translations = {
    en: {
      appName: 'Earth Guardian',
      home: 'Home',
      safeZones: 'Safe Zones',
      education: 'Education',
      currentLocation: 'Current Location',
      riskLevel: 'Risk Level',
      floodRisk: 'Flood Risk',
      high: 'High',
      medium: 'Medium',
      low: 'Low',
      evacuate: 'Evacuate',
      prepare: 'Prepare',
      watch: 'Watch',
      alertTitle: 'Emergency Alert',
      alertMessage: 'Flood expected in 2 hours. Move to the nearest safe zone.',
      viewSafeZones: 'View Safe Zones',
      sos: 'SOS',
      nearbyShelters: 'Nearby Shelters',
      distance: 'Distance',
      directions: 'Directions',
      call: 'Call',
      disasterTips: 'Disaster Tips',
      floodTips: 'Flood Safety',
      wildfireTips: 'Wildfire Safety',
      landslideTips: 'Landslide Safety',
      earthquakeTips: 'Earthquake Safety',
      voiceAlert: 'Voice Alert',
      accessibility: 'Accessibility',
      largeText: 'Large Text',
      voiceAlerts: 'Voice Alerts',
      language: 'Language',
      english: 'English',
      settings: 'Settings',
      searchShelters: 'Search shelters...',
      available: 'Available',
      limited: 'Limited',
      full: 'Full',
      maintenance: 'Maintenance',
      unknown: 'Unknown',
      emergency: 'Emergency',
      call911: 'Call 911 for emergencies',
      viewOnMap: 'View on Map',
      essentialEmergencyKit: 'Essential Emergency Kit',
      firstAidKit: 'First Aid Kit',
      water3Days: 'Water (3 days)',
      nonPerishableFood: 'Non-perishable Food',
      batteryRadio: 'Battery Radio',
      flashlights: 'Flashlights',
      extraBatteries: 'Extra Batteries',
      medications: 'Medications',
      importantDocuments: 'Important Documents',
      tapToExpand: 'Tap to expand',
      moreTips: 'More Tips',
      callEmergency: 'Call Emergency',
      importantEmergencyNumbers: 'Important Emergency Numbers',
      generalEmergency: 'General Emergency',
      police: 'Police',
      ambulance: 'Ambulance',
      // New Earth Guardian specific translations
      earlyWarning: 'Early Warning',
      confidenceLevel: 'Confidence Level',
      hoursAhead: 'hours ahead',
      evacuationMap: 'Evacuation Map',
      safeRoutes: 'Safe Routes',
      voiceGuidance: 'Voice Guidance',
      reportEmergency: 'Report Emergency',
      uploadMedia: 'Upload Media',
      aiClassification: 'AI Classification',
      smartAssistant: 'Smart Assistant',
      voiceCommands: 'Voice Commands',
      offlineMode: 'Offline Mode',
      preloadedMaps: 'Preloaded Maps',
      emergencyContacts: 'Emergency Contacts',
      survivorPoints: 'Survivor Points',
      interactiveScenarios: 'Interactive Scenarios',
      disasterGames: 'Disaster Games',
      massAlert: 'Mass Alert',
      resourceManagement: 'Resource Management',
      realTimeMonitoring: 'Real-time Monitoring',
      disasterAnalytics: 'Disaster Analytics',
      simulationMode: 'Simulation Mode',
      trainingExercises: 'Training Exercises'
    },
    ar: {
      appName: 'حارس الأرض',
      home: 'الرئيسية',
      safeZones: 'المناطق الآمنة',
      education: 'التوعية',
      currentLocation: 'الموقع الحالي',
      riskLevel: 'مستوى الخطر',
      floodRisk: 'خطر الفيضان',
      high: 'عالي',
      medium: 'متوسط',
      low: 'منخفض',
      evacuate: 'إخلاء فوري',
      prepare: 'استعد',
      watch: 'راقب',
      alertTitle: 'تنبيه طوارئ',
      alertMessage: 'فيضان متوقع خلال ساعتين. انتقل إلى أقرب منطقة آمنة.',
      viewSafeZones: 'عرض المناطق الآمنة',
      sos: 'طلب مساعدة',
      nearbyShelters: 'الملاجئ القريبة',
      distance: 'المسافة',
      directions: 'الاتجاهات',
      call: 'اتصال',
      disasterTips: 'نصائح الكوارث',
      floodTips: 'سلامة الفيضان',
      wildfireTips: 'سلامة الحرائق',
      landslideTips: 'سلامة الانهيارات',
      earthquakeTips: 'سلامة الزلازل',
      voiceAlert: 'تنبيه صوتي',
      accessibility: 'إمكانية الوصول',
      largeText: 'نص كبير',
      voiceAlerts: 'التنبيهات الصوتية',
      language: 'اللغة',
      english: 'الإنجليزية',
      settings: 'الإعدادات',
      searchShelters: 'البحث في الملاجئ...',
      available: 'متاح',
      limited: 'محدود',
      full: 'ممتلئ',
      maintenance: 'صيانة',
      unknown: 'غير معروف',
      emergency: 'طوارئ',
      call911: 'اتصل بـ 911 للطوارئ',
      viewOnMap: 'عرض على الخريطة',
      essentialEmergencyKit: 'حقيبة الطوارئ الأساسية',
      firstAidKit: 'حقيبة الإسعافات الأولية',
      water3Days: 'ماء (3 أيام)',
      nonPerishableFood: 'طعام غير قابل للتلف',
      batteryRadio: 'راديو بالبطارية',
      flashlights: 'مصابيح يدوية',
      extraBatteries: 'بطاريات إضافية',
      medications: 'الأدوية',
      importantDocuments: 'الوثائق المهمة',
      tapToExpand: 'اضغط للتوسيع',
      moreTips: 'نصائح أكثر',
      callEmergency: 'اتصل بالطوارئ',
      importantEmergencyNumbers: 'أرقام الطوارئ المهمة',
      generalEmergency: 'الطوارئ العامة',
      police: 'الشرطة',
      ambulance: 'الإسعاف',
      // New Earth Guardian specific translations in Arabic
      earlyWarning: 'الإنذار المبكر',
      confidenceLevel: 'مستوى الثقة',
      hoursAhead: 'ساعة مقدماً',
      evacuationMap: 'خريطة الإخلاء',
      safeRoutes: 'الطرق الآمنة',
      voiceGuidance: 'التوجيه الصوتي',
      reportEmergency: 'تبليغ طوارئ',
      uploadMedia: 'رفع وسائط',
      aiClassification: 'تصنيف ذكي',
      smartAssistant: 'المساعد الذكي',
      voiceCommands: 'الأوامر الصوتية',
      offlineMode: 'الوضع غير المتصل',
      preloadedMaps: 'خرائط محملة مسبقاً',
      emergencyContacts: 'جهات الطوارئ',
      survivorPoints: 'نقاط النجاة',
      interactiveScenarios: 'سيناريوهات تفاعلية',
      disasterGames: 'ألعاب الكوارث',
      massAlert: 'إنذار جماعي',
      resourceManagement: 'إدارة الموارد',
      realTimeMonitoring: 'المراقبة المباشرة',
      disasterAnalytics: 'تحليلات الكوارث',
      simulationMode: 'وضع المحاكاة',
      trainingExercises: 'تمارين التدريب'
    }
  }

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    document.documentElement.lang = newLanguage
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr'
  }

  const t = (key) => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}