// Talk Object Interface Definition
const talkObject = {
  // Basic Talk Information
  id: String, // Unique identifier: "talk-001"
  title: String, // Talk title: "Vue 3 Composition API"
  description: String, // Talk description/summary

  // Scheduling
  date: String, // Date: "2025-06-15" (ISO date format)
  startTime: String, // Start time: "09:00" or "09:00:00"
  endTime: String, // End time: "10:30" or "10:30:00"

  // Meeting Details
  msTeamsLink: String, // Teams meeting URL

  // Classification
  tags: Array, // ["Frontend", "JavaScript", "Advanced"]
  isBookmarked: Boolean, // User bookmark status

  // Speaker Information (Array to support multiple speakers)
  speakers: Array, // Array of speaker objects (see structure below)
}

// Speaker Object Structure (for the speakers array)
const speakerObject = {
  name: String, // Speaker's full name
  avatar: String, // URL to speaker's profile image
  isInternal: Boolean, // true = internal, false = external

  // Internal Speaker Properties (when isInternal = true)
  department: String, // "Engineering", "Marketing", etc.

  // External Speaker Properties (when isInternal = false)
  company: String, // "Google", "Microsoft", etc.
  position: String, // "Senior Developer", "CTO", etc.
}

// Complete Example with Sample Data
const exampleTalk = {
  id: 'talk-001',
  title: 'Advanced Vue.js State Management with Pinia',
  description: 'Deep dive into modern state management patterns using Pinia, covering store composition, plugins, and testing strategies.',

  date: '2025-06-15',
  startTime: '09:00',
  endTime: '10:30',

  msTeamsLink: 'https://teams.microsoft.com/l/meetup-join/...',

  tags: ['Vue.js', 'State Management', 'Frontend', 'Advanced'],
  isBookmarked: false,

  speakers: [
    {
      name: 'Sarah Johnson',
      avatar: 'https://example.com/avatars/sarah.jpg',
      isInternal: true,
      department: 'Frontend Engineering',
      company: null,
      position: null,
    },
    {
      name: 'Alex Chen',
      avatar: 'https://example.com/avatars/alex.jpg',
      isInternal: false,
      department: null,
      company: 'Vue.js Core Team',
      position: 'Senior Developer',
    },
  ],
}
