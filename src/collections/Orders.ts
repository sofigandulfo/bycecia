import type { CollectionConfig } from 'payload'

const Orders: CollectionConfig = {
  slug: 'orders',
  labels: {
    singular: 'Pedido',
    plural: 'Pedidos',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
        name: 'products',
        type: 'array',
        fields: [
            {
                name: 'product',
                type: 'relationship',
                relationTo: 'products',
                required: true,
            },
            {
                name: 'quantity',
                type: 'number',
                required: true,
            },
        ],
    },
    {
        name: 'total',
        type: 'number',
        required: true,
    },
    {
      name: 'shippingAddress',
      type: 'group',
      label: 'Dirección de Envío',
      fields: [
        {
          name: 'country',
          type: 'text',
          label: 'País/Región',
          required: true,
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
        {
          name: 'address',
          type: 'text',
          label: 'Dirección de Envío',
          required: true,
        },
        {
          name: 'postalCode',
          type: 'text',
          label: 'Código Postal',
          required: true,
        },
        {
          name: 'city',
          type: 'text',
          label: 'Ciudad',
          required: true,
        },
        {
          name: 'state',
          type: 'text',
          label: 'Provincia/Estado',
          required: true
        }
      ]
    }, 
    {
        name: 'status',
        type: 'select',
        options: [
            { label: 'Pendiente', value: 'pending' },
            { label: 'Enviado', value: 'shipped' },
            { label: 'Entregado', value: 'delivered' },
            { label: 'Cancelado', value: 'cancelled' },
        ],
        defaultValue: 'pending',
    },
  ],
}

export default Orders;
