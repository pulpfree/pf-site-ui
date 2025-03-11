/**
 * Available environment types
 */
export type EnvironmentType = 'development' | 'staging' | 'production' | 'test'

/**
 * Environment information object structure
 */
export interface EnvironmentInfo {
  readonly environment: EnvironmentType
  readonly isDevelopment: boolean
  readonly isProduction: boolean
  readonly isStaging: boolean
  readonly isTest: boolean
  readonly isBrowser: boolean
  readonly isServer: boolean
  readonly apiBaseUrl: string
}

/**
 * API base URLs by environment
 */
const API_BASE_URLS: Record<EnvironmentType, string> = {
  development: 'http://localhost:3000',
  staging: 'https://site-contact.api.dev.pulpfree.io',
  production: 'https://api.example.com',
  test: 'http://localhost:3000',
} as const

/**
 * Returns the appropriate API base URL for the current environment
 */
function getApiBaseUrl(environment: EnvironmentType): string {
  // Check if custom API URL is defined in Vite environment variables
  const customApiUrl = import.meta.env.VITE_API_BASE_URL
  if (customApiUrl) {
    return customApiUrl
  }

  return API_BASE_URLS[environment] ?? API_BASE_URLS.development
}

/**
 * Detects the current runtime environment
 * @returns Environment information object
 */
export function detectEnv(): EnvironmentInfo {
  // Check if we're in a browser environment
  const isBrowser = typeof window !== 'undefined'

  // Check if we're in SSR mode
  const isSSR = typeof import.meta.env.SSR !== 'undefined' ? import.meta.env.SSR : false

  // Use Vite's environment variables if available
  let environment: EnvironmentType

  // First try explicit environment variable
  if (import.meta.env.VITE_APP_ENV) {
    environment = import.meta.env.VITE_APP_ENV as EnvironmentType
  }
  // Then check Vite's mode
  else if (import.meta.env.MODE) {
    if (import.meta.env.MODE === 'development' || import.meta.env.DEV) {
      environment = 'development'
    } else if (import.meta.env.MODE === 'production' || import.meta.env.PROD) {
      // Further determine if it's staging or production
      environment = import.meta.env.VITE_IS_STAGING ? 'staging' : 'production'
    } else if (import.meta.env.MODE === 'test') {
      environment = 'test'
    } else {
      environment = 'development' // Default fallback
    }
  }
  // Fallback to process.env if Vite variables not available
  else {
    environment = (process.env.NODE_ENV as EnvironmentType) || 'development'
  }

  // For browser environments, can also use location to determine environment
  if (isBrowser) {
    const hostname = window.location.hostname
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname.includes('192.168.86')) {
      environment = 'development'
    } else if (hostname.includes('staging') || hostname.includes('dev')) {
      environment = 'staging'
    } else if (!hostname.includes('localhost')) {
      environment = 'production'
    }
  }

  return {
    environment,
    isDevelopment: environment === 'development',
    isProduction: environment === 'production',
    isStaging: environment === 'staging',
    isTest: environment === 'test',
    isBrowser,
    isServer: isSSR || !isBrowser,
    apiBaseUrl: getApiBaseUrl(environment),
  } as const
}
