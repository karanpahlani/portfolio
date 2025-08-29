import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karan Pahlani - Senior Software Engineer',
    short_name: 'Karan Pahlani',
    description: 'Senior Software Engineer specializing in scalable, customer-centric applications',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#ffffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  }
}