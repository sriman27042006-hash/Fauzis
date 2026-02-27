/**
 * API helper functions for communicating with backend services
 */

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000'

/**
 * Generic fetch wrapper with error handling
 */
const fetchAPI = async (endpoint, options = {}) => {
  try {
    const url = `${API_BASE_URL}${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      const error = await response.json().catch(() => ({}))
      throw new Error(error.message || `API error: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('API Error:', error)
    throw error
  }
}





/**
 * Full code review
 * Comprehensive review including bugs, performance, and improvements
 */
export const reviewCode = async (code) => {
  return fetchAPI('/review', {
    method: 'POST',
    body: JSON.stringify({ code }),
  })
}

/**
 * Health check
 * Verifies API server is running
 */
export const healthCheck = async () => {
  return fetchAPI('/health', {
    method: 'GET',
  })
}

export default {
  reviewCode,
  healthCheck,
}
