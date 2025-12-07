import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Restorasi Bumi',
        short_name: 'Restorasi Bumi',
        description: 'Yayasan Restorasi Bumi - Membangun Masa Depan yang Lebih Hijau',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
