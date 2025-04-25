import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: 'Usuario',
    plural: 'Usuarios',
  },
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    read: ({ req }) => req.user?.role === 'admin',
    create: ({ req }) => req.user?.role === 'admin',
    update: ({ req }) => req.user?.role === 'admin',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
   {
      name: 'role',
      type: 'select',
      label: 'Rol',
      required: true,
      defaultValue: 'customer',
      admin: {
        condition: ({ user }) => user?.role === 'admin',
      },
      options: [
        { label: 'Cliente', value: 'customer' },
        { label: 'Administrador', value: 'admin' },
      ]
    },
    {
      name: 'firstName',
      type: 'text',
      label: 'Nombre',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      label: 'Apellido',
      required: true,
    },
    
  ],
}
