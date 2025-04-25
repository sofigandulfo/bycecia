import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: 'Imagen',
    plural: 'Imagenes',
  },
  access: {
    read: () => true,
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
},
  fields: [],
  upload: {
    staticDir: '/media',
    imageSizes: [
      {
        name: 'thumbanil',
        width: 55,
        height: 55,
      },
      {
        name: 'card',
        width: 170,
        height: 200,
      },
      {
        name: 'detail',
        width: undefined,
        height: 350,
      }
    ] 
  }
}
