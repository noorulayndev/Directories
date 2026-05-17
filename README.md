# React Native Messages Directory Application

## Project Title & Objective

This is a **React Native Messages Directory Application** developed for Exercise 3 of COMP5450 Mobile Programming at Lakehead University. The application demonstrates a comprehensive mobile messaging interface built with React Native, Expo, and TypeScript.

The primary objective is to create a functional mobile application that allows users to navigate through different message categories (Home, Love, Family, Friends, School) and view messages within each category. The app showcases modern mobile UI/UX design principles, proper navigation patterns, and clean code architecture.

## Project Structure

```
messages_directory_app/
├── App.tsx                           # Main application entry point with navigation
├── app.json                          # Expo configuration
├── index.ts                          # Application index
├── package.json                      # Project dependencies and scripts
├── tsconfig.json                     # TypeScript configuration
├── .gitignore                        # Git ignore rules
├── assets/                           # Static assets directory
│   ├── adaptive-icon.png
│   ├── favicon.png
│   ├── icon.png
│   └── splash.png
├── src/                              # Source code directory
│   ├── components/                   # Reusable components (future expansion)
│   ├── data/                         # Data layer
│   │   └── mockData.ts              # Mock message data with TypeScript interfaces
│   ├── screens/                      # Screen components
│   │   ├── DirectoryScreen.tsx      # Main directory listing screen
│   │   └── MessagesScreen.tsx       # Individual message category screen
│   └── types/                        # TypeScript type definitions
│       └── navigation.ts             # Navigation parameter types
└── node_modules/                     # Dependencies (excluded from git)
```

## Key Features

- **Directory Navigation**: Clean, card-based interface displaying 5 message categories
- **Message Feed**: Detailed message view with sender avatars, timestamps, and content
- **TypeScript Integration**: Full type safety and modern development experience
- **React Navigation**: Professional navigation stack with dynamic headers
- **Responsive Design**: Optimized for mobile devices with SafeAreaView
- **Mock Data**: Realistic message data structure for demonstration purposes

## Technology Stack

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform and toolchain
- **TypeScript**: Type-safe JavaScript development
- **React Navigation**: Navigation library for screen transitions
- **Expo Vector Icons**: Icon library for UI elements
- **React Native Safe Area Context**: Safe area handling for modern devices

## Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Expo CLI (optional, npx can be used)
- Expo Go app on your mobile device (for testing)

### Installation Steps

1. **Clone or extract the project directory**
   ```bash
   cd messages_directory_app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

   Or if you prefer yarn:
   ```bash
   yarn install
   ```

3. **Start the Expo development server**
   ```bash
   npx expo start
   ```

4. **Test the application**
   - Scan the QR code with the Expo Go app on your mobile device
   - Or press `i` to open iOS simulator
   - Or press `a` to open Android emulator

## Usage Instructions

1. **Main Directory Screen**: Browse through the 5 message categories (Home, Love, Family, Friends, School)
2. **Category Selection**: Tap any category card to view messages within that directory
3. **Message Viewing**: Scroll through messages with sender information, timestamps, and content
4. **Navigation**: Use the back button to return to the main directory

## Screenshots

### Main Directory Page
*Screenshot showing the main directory interface with Home, Love, Family, Friends, and School categories displayed as cards with icons and message counts.*

![Main Directory Page](screenshots/directory-screen.png)

### Selected Message Stream Page
*Screenshot showing the messages screen for a selected category, displaying individual messages with sender avatars, names, subjects, timestamps, and message content.*

![Messages Screen](screenshots/messages-screen.png)

## Development Notes

- The application uses a mock data structure located in `src/data/mockData.ts`
- Navigation types are defined in `src/types/navigation.ts` for type safety
- All screens implement SafeAreaView for proper device compatibility
- Platform-specific styling is used for shadows and elevations

## Project Requirements Fulfilled

- ✅ React Native with Expo setup
- ✅ TypeScript integration
- ✅ Multiple screen navigation
- ✅ Mock data implementation
- ✅ Clean UI/UX design
- ✅ Proper project structure
- ✅ Professional documentation

## Submission Information

**Course**: COMP5450 Mobile Programming
**Institution**: Lakehead University
**Exercise**: Exercise 3 - React Native Messages Directory Application
**Framework**: React Native with Expo
**Language**: TypeScript

---

*This project demonstrates fundamental mobile app development concepts including navigation, data management, UI design, and React Native best practices.*