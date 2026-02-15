/**
 * Portfolio Data - Single Source of Truth
 * 
 * Edit this file to update your portfolio.
 * Save the file, then refresh the browser to see changes immediately.
 * Works everywhere: double-click index.html, GitHub Pages, any server.
 */
const PORTFOLIO_DATA = {
  "personal": {
    "name": "Ahmed Khaled",
    "title": "Mobile Developer",
    "description": "5+ years crafting exceptional mobile experiences with Flutter, Kotlin & Java",
    "image": "image.jpeg",
    "location": "Cairo, Egypt",
    "phone": "+20 106 934 3393",
    "email": "ahmed.khaled.z@hotmail.com",
    "education": {
      "degree": "Bachelor's Degree, Information Systems",
      "institution": "New Cairo Academy",
      "period": "2014 - 2018"
    }
  },
  "social": {
    "github": "https://github.com/ahmed-khaled-z",
    "linkedin": "https://www.linkedin.com/in/ahmed-khaled-123ab3130/",
    "medium": "https://medium.com/@ahmed.khaled.zk",
    "wakatime": "https://wakatime.com/@ahmedkhaledzk"
  },
  "experience": [
    {
      "title": "SENIOR MOBILE DEVELOPER",
      "company": "Watania Solutions Co.",
      "type": "FULL-TIME - HYBRID",
      "period": "Jul 2023 - Present"
    },
    {
      "title": "Full Stack",
      "company": "PressX",
      "type": "SELF EMPLOYED",
      "period": "2022 - Present"
    },
    {
      "title": "SENIOR MOBILE DEVELOPER",
      "company": "WebDev",
      "type": "PART-TIME - REMOTE",
      "period": "Dec 2022 - 2024"
    },
    {
      "title": "SENIOR MOBILE DEVELOPER",
      "company": "XDev",
      "type": "PART-TIME - REMOTE",
      "period": "Oct 2022 - 2023"
    },
    {
      "title": "MID LEVEL MOBILE DEVELOPER",
      "company": "Technosignage",
      "type": "FULL-TIME - REMOTE",
      "period": "Apr 2021 - Jun 2023"
    },
    {
      "title": "JUNIOR MOBILE DEVELOPER",
      "company": "AppTech EGY",
      "type": "FULL-TIME - ON-SITE",
      "period": "Aug 2020 - Apr 2021"
    }
  ],
  "skills": [
    {
      "category": "Platforms",
      "items": ["Flutter", "Android Native", "Laravel"]
    },
    {
      "category": "Architecture",
      "items": ["SOLID Principles", "Design Patterns", "Version Control", "Dependency Injection"]
    },
    {
      "category": "Advanced",
      "items": ["Serverpod", "CI/CD", "Testing (Unit - Widget - Integration)", "Crash Analysis", "Secure Storage"]
    },
    {
      "category": "State Management",
      "items": ["Provider", "Bloc / Cubit", "Riverpod"]
    },
    {
      "category": "Integration",
      "items": ["REST APIs", "GraphQL", "WebSockets", "Firebase", "Maps", "Payment Methods"]
    },
    {
      "category": "Soft Skills",
      "items": ["Leadership", "Communication", "Self Learning", "Documentation", "Time Estimation", "Problem Solving", "UX Awareness", "Decision Making"]
    }
  ],
  "projects": [
    {
      "name": "Routz",
      "company": "Schoolz",
      "year": "2024",
      "description": "Real-time school bus tracking and management app for parents, featuring live GPS trip monitoring, student and authorized delegate management with signature capture, push notifications for trip updates, trip history with live photos, and multi-language support (Arabic/English) — part of the Schoolz transportation ecosystem.",
      "shortDescription": "School Bus Tracking for Parents",
      "technologies": ["Flutter", "Bloc", "Google Maps", "Firebase", "Socket.IO", "Sentry", "Clean Architecture", "PayTabs"],
      "playStore": "https://play.google.com/store/apps/details?id=me.routz.routz",
      "appStore": "https://apps.apple.com/app/id<APP_ID>",
      "icon": "R"
    },
    {
      "name": "Routz Captain",
      "company": "Routz",
      "year": "2024",
      "description": "A driver-facing transportation management app featuring real-time trip tracking with Google Maps, passenger status management, background location services, Socket.io live updates, QR-based student verification for school routes, periodic camera capture, push notifications, and multi-language (EN/AR) support — built with clean architecture and BLoC state management.",
      "shortDescription": "Transportation Driver Management",
      "technologies": ["Flutter", "Bloc", "Google Maps", "Socket.io", "Firebase", "Dio", "SQFlite", "Sentry", "Background Services"],
      "playStore": null,
      "appStore": null,
      "icon": "R"
    },
    {
      "name": "PressX",
      "company": "PressX",
      "year": "2022",
      "description": "Full-stack PlayStation cafe management system with device booking, session tracking, payment integration, and real-time availability monitoring for both customers and administrators.",
      "shortDescription": "PlayStation Cafe Management",
      "technologies": ["Flutter", "Laravel", "WebSockets", "Bloc", "Payment Gateway"],
      "playStore": "https://play.google.com/store/apps/details?id=com.elmadar.pressx",
      "appStore": null,
      "icon": "P"
    },
    {
      "name": "EVKUMBARA",
      "company": "WebDivs",
      "year": "2022",
      "description": "Real estate investment platform connecting investors with property opportunities, featuring property listings, investment calculators, portfolio tracking, and secure transaction processing.",
      "shortDescription": "Real Estate Investment",
      "technologies": ["Flutter", "Firebase", "REST API", "Provider", "Push Notifications"],
      "playStore": "https://play.google.com/store/apps/details?id=com.evkumpara.webdivs.evkumpara",
      "appStore": null,
      "icon": "E"
    },
    {
      "name": "SHAREWINDS BOOKING APP",
      "company": "Technosignage",
      "year": "2022",
      "description": "Meeting room and shared workspace booking system with calendar integration, resource availability, booking management, and automated notifications for efficient space utilization.",
      "shortDescription": "Booking System",
      "technologies": ["Flutter", "REST API", "Calendar Integration", "Provider", "SQLite"],
      "playStore": null,
      "appStore": null,
      "icon": "S"
    },
    {
      "name": "SHAREWINDS MAIN SIGN",
      "company": "Technosignage",
      "year": "2021",
      "description": "Digital signage booking system for main displays with content scheduling, booking management, and real-time availability updates built with native Android.",
      "shortDescription": "Booking System (Java)",
      "technologies": ["Java", "REST API", "SQLite", "Material Design", "Background Services"],
      "playStore": null,
      "appStore": null,
      "icon": "S"
    },
    {
      "name": "SHAREWINDS DOOR SIGN",
      "company": "Technosignage",
      "year": "2021",
      "description": "Meeting room door display application showing room availability, current bookings, and enabling quick reservations with native Android implementation.",
      "shortDescription": "Booking System (Java)",
      "technologies": ["Java", "REST API", "SQLite", "Material Design", "Real-time Updates"],
      "playStore": null,
      "appStore": null,
      "icon": "S"
    },
    {
      "name": "SHAREWINDS WAYFINDING",
      "company": "Technosignage",
      "year": "2021",
      "description": "Interactive wayfinding and navigation application for large buildings and campuses with map integration, route planning, and point-of-interest discovery.",
      "shortDescription": "Way Finder App (Java)",
      "technologies": ["Java", "Indoor Maps", "SQLite", "Material Design", "Location Services"],
      "playStore": null,
      "appStore": null,
      "icon": "S"
    },
    {
      "name": "Klu",
      "company": "WSC",
      "year": "2024",
      "description": "Comprehensive spa and salon booking platform enabling customers to discover, book, and manage beauty service appointments with features including branch search and filtering, real-time availability checking, saved favorites, appointment management, service reviews and ratings, promotional codes, multi-language support (Arabic/English), and location-based branch discovery with Google Maps integration.",
      "shortDescription": "Spa & Salon Booking Platform",
      "technologies": ["Flutter", "Riverpod", "Firebase", "Google Maps", "Clean Architecture", "Easy Localization"],
      "playStore": "https://play.google.com/store/apps/details?id=com.klu.customer",
      "appStore": "https://testflight.apple.com/join/7VYKyD4K,
      "icon": "K"
    },
    {
      "name": "KLU Employee",
      "company": "WSC",
      "year": "2024",
      "description": "Mobile app for KLU business partners to manage their business: appointments, services, team, calendar, reports (sales, clients, appointments, shifts, time-off), reviews, notifications, profile, and policy documents. Integrates with KLU booking platform (klubooking.com) with OAuth, Firebase push notifications, and multi-flavor API environments.",
      "shortDescription": "KLU Business Partner – Manage your business easily",
      "technologies": [
        "Flutter",
        "Riverpod",
        "Clean Architecture",
        "Dio",
        "Firebase (FCM)",
        "OAuth (AppAuth)",
        "easy_localization",
        "Google Maps",
        "Syncfusion Calendar & Charts",
        "GetIt"
      ],
      "playStore": "https://play.google.com/store/apps/details?id=com.klu.employee",
      "appStore": "https://testflight.apple.com/join/R3XqrXSY,
      "icon": "K"
    },
  ],
  "packages": [
    {
      "name": "Clean Architecture with State Management",
      "url": "https://pub.dev/packages/clean_architecture_with_state_management",
      "description": "A comprehensive Flutter package implementing clean architecture principles with multiple state management solutions"
    },
    {
      "name": "SVG Click Listener",
      "url": "https://pub.dev/packages/flutter_svg_click_listener",
      "description": "Flutter package for detecting clicks on specific elements within SVG files"
    },
    {
      "name": "Flutter Custom Creator",
      "url": "https://pub.dev/packages/flutter_custom_creator",
      "description": "Code generation tool for Flutter custom widgets and boilerplate code"
    }
  ]
};
