# Elevate Recap - Podcast Show Notes Service

## Overview

Elevate Recap is a professional website for a podcast show notes and content service. The application is built as a full-stack solution with a React frontend and Express backend, designed to help podcasters save time by providing AI-powered transcription and content creation services. The site now includes comprehensive legal pages and uses FormSubmit for contact form submissions.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with custom shadcn/ui components
- **State Management**: React Query (@tanstack/react-query) for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple

### Design System
- **Primary Color**: Deep blue (#1F3C88)
- **Accent Color**: Bright teal (#00C4CC)
- **Typography**: Montserrat (headings) and Open Sans (body text)
- **Theme**: Light theme with CSS custom properties for theming

## Key Components

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contact Submissions Table**: Stores contact form submissions with fields for name, email, podcast link, and message
- **Schema Validation**: Zod schemas for runtime validation of database operations

### API Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve all contact submissions (admin)

### Frontend Pages
- **Home Page**: Landing page with multiple sections:
  - Hero section with main value proposition
  - How It Works (3-step process)
  - What You Get (service features)
  - Pricing (4 pricing tiers)
  - Contact form
  - Footer
- **About Page**: Detailed company information and mission
- **Contact Page**: Comprehensive contact form with inquiry types
- **Privacy Policy Page**: Complete privacy policy for Elevate Recap
- **Terms of Service Page**: Legal terms and conditions

### Storage Layer
- **Interface**: IStorage interface for data operations
- **Implementation**: Currently using in-memory storage (MemStorage) for development
- **Future**: Will be replaced with PostgreSQL implementation using Drizzle ORM

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend or dedicated contact page
   - Form data validated on client side
   - Submitted directly to FormSubmit service (levi@elevaterecap.com)
   - Automatic response emails sent to users
   - Success/error feedback provided to user via toast notifications

2. **Content Delivery**:
   - Static assets served by Vite in development
   - Production build creates optimized static files
   - Express serves both API and static content

## External Dependencies

### Core Dependencies
- **Database**: @neondatabase/serverless for PostgreSQL connection
- **ORM**: drizzle-orm and drizzle-kit for database operations
- **UI**: Complete Radix UI component library
- **Styling**: Tailwind CSS with PostCSS
- **Icons**: Lucide React icons, React Icons for social media

### Development Tools
- **TypeScript**: Full type safety across frontend and backend
- **ESBuild**: Fast bundling for production backend
- **Vite**: Development server and build tool
- **TSX**: TypeScript execution for development server

### Third-party Services
- **FormSubmit**: Contact form email delivery service
- **Unsplash**: Stock images for hero and about sections
- **Google Fonts**: Montserrat and Open Sans typography

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with hot module replacement
- **Backend**: TSX with nodemon-like functionality
- **Database**: Environment-based connection to Neon Database

### Production Build
- **Frontend**: Vite build creates optimized static files in `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Database**: Drizzle migrations applied via `db:push` command

### Environment Configuration
- **DATABASE_URL**: Required environment variable for PostgreSQL connection
- **NODE_ENV**: Controls development vs production behavior
- **REPL_ID**: Replit-specific environment detection

### File Structure
- `client/` - React frontend application
- `server/` - Express backend application
- `shared/` - Shared TypeScript types and schemas
- `migrations/` - Database migration files
- `dist/` - Production build output

The application is designed to be deployed on platforms like Replit, Vercel, or traditional hosting with proper environment variable configuration.

## Recent Changes: Latest modifications with dates

### July 16, 2025
- **Major Change**: Replaced contact page with embedded Google Forms iframe
- **Implementation**: Contact page now displays Google Form directly embedded
- **Form URL**: https://docs.google.com/forms/d/e/1FAIpQLSdicODiZsYTGXrFVdwoG7CXnRpMilUDUnelz_6DUpnCZx-k-w/viewform
- **Home Page**: Still uses direct email contact method with pre-filled email
- **User Experience**: Reliable form submission through Google's infrastructure
- **Previous Issue**: Removed all React-based forms due to system-level input blocking in Replit environment

### July 15, 2025
- **Critical Issue**: Contact forms experiencing system-level input blocking across all browsers
- **Root Cause**: Input fields not responding to typing/clicking despite extensive CSS and JavaScript fixes
- **Attempted Solutions**: 
  - Rebuilt forms with native HTML elements (removed React components)
  - Applied nuclear CSS overrides for pointer-events and z-index
  - Added multiple test inputs with different approaches
  - Tested with basic HTML form outside React application
- **Current Status**: Forms structurally correct but blocked by system/browser environment
- **Resolution**: User requested complete removal of all form code