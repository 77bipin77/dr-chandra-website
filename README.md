# Dr. Chandra - Chiropractic & Osteopathy Clinic Website

A modern, responsive website for Dr. Chandra's Chiropractic & Osteopathy Clinic in Haldwani, Nainital. Built with React.js, Tailwind CSS, and Firebase integration.

## 🌟 Features

### 🎨 UI/UX Features
- **Fixed Background Hero Section** - Stunning hero with Dr. Chandra's image and overlay text
- **Sticky Header** - Becomes more visible on scroll with smooth transitions
- **Floating Contact Buttons** - Phone, WhatsApp, and Instagram buttons with animations
- **Movable Image Gallery** - Horizontally scrollable gallery with lightbox functionality
- **Responsive Design** - Fully responsive across all devices
- **Modern Animations** - Framer Motion animations and scroll-based effects

### 🔧 Technical Features
- **React.js** - Modern React with hooks and functional components
- **Tailwind CSS** - Utility-first CSS framework for rapid development
- **Firebase Integration** - Firestore database for appointment form submissions
- **Framer Motion** - Smooth animations and transitions
- **Lucide Icons** - Beautiful, consistent iconography
- **SEO Optimized** - Meta tags and structured content

### 📱 Key Sections
1. **Hero Section** - Fixed background with call-to-action buttons
2. **About** - Dr. Chandra's expertise and approach
3. **Services** - Chiropractic and osteopathic treatments
4. **Testimonials** - Patient reviews with carousel
5. **Gallery** - Clinic photos with lightbox view
6. **Clinic Hours** - Schedule and location information
7. **Appointment Form** - Firebase-powered booking system
8. **Footer** - Contact info and social links

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Firebase account (for backend functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dr-chandra-clinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔥 Firebase Setup

The website uses Firebase for appointment form submissions. The configuration is already set up in `src/firebase.js`.

### Firestore Database
- Collection: `appointments`
- Fields: name, phone, email, preferredDate, preferredTime, message, timestamp, status

### Firebase Configuration
```javascript
const firebaseConfig = {
  apiKey: "AIzaSyCJjScbvycepsMuqtMC3cXN77e56GrGsQo",
  authDomain: "dr-chandra-heals-website.firebaseapp.com",
  projectId: "dr-chandra-heals-website",
  storageBucket: "dr-chandra-heals-website.firebasestorage.app",
  messagingSenderId: "344038983871",
  appId: "1:344038983871:web:d6d9658ee0cd088d699e0a",
  measurementId: "G-2GMB4KXH7E"
};
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Sticky navigation header
│   ├── Hero.js            # Hero section with fixed background
│   ├── About.js           # About Dr. Chandra section
│   ├── Services.js        # Services and treatments
│   ├── Testimonials.js    # Patient testimonials carousel
│   ├── Gallery.js         # Image gallery with lightbox
│   ├── ClinicHours.js     # Schedule and location
│   ├── AppointmentForm.js # Firebase-powered booking form
│   ├── FloatingButtons.js # Floating contact buttons
│   └── Footer.js          # Footer with links and info
├── firebase.js            # Firebase configuration
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Tailwind CSS and custom styles
```

## 🎨 Customization

### Colors
The website uses a custom color palette defined in `tailwind.config.js`:
- Primary: Blue shades (`primary-50` to `primary-900`)
- Secondary: Gray shades (`secondary-50` to `secondary-900`)

### Fonts
- **Inter** - Modern, readable font family
- Loaded from Google Fonts

### Images
Replace placeholder images in components with actual clinic photos:
- Hero background image
- Gallery images
- About section image

## 📱 Contact Information

- **Phone**: 8077531426
- **WhatsApp**: wa.me/918077531426
- **Instagram**: @dr_chandra_heals
- **Address**: Halduchor near Evergreen School, Haldwani, Nainital, Uttarakhand

## 🕒 Clinic Hours

- **Monday - Saturday**: 10:00 AM – 1:00 PM, 4:00 PM – 7:00 PM
- **Sunday**: Closed

## 🚀 Deployment

### Firebase Hosting (Recommended)
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Deploy automatically on push

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React settings
3. Deploy with zero configuration

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 📊 SEO Features

- Meta tags for social sharing
- Structured content for search engines
- Keywords: "Chiropractor in Haldwani", "Osteopathy Haldwani", etc.
- Responsive design for mobile-first indexing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 👨‍⚕️ About Dr. Chandra

Dr. Chandra is a qualified chiropractic and osteopathic specialist with 6+ years of experience, trained from Sweden, Europe. The clinic specializes in natural healing methods without medicine or surgery.

## 🎨 Design Credits

Designed with ❤️ by **Finding.Bipin**

---

For support or questions, please contact the development team or Dr. Chandra directly. 