import { CollectionConfig } from "payload";

const Products: CollectionConfig = {
    slug: 'products',
    labels: {
        singular: 'Producto',
        plural: 'Productos',
    },
    access: {
        read: () => true,
        create: ({ req }) => req.user?.role === 'admin',
        update: ({ req }) => req.user?.role === 'admin',
        delete: ({ req }) => req.user?.role === 'admin',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            label: 'Nombre del Producto',
            required: true,
        },
        {
            name: 'description',
            type: 'textarea',
            label: 'Descripción del Producto',
            required: true,
        },
        {
            name: 'prices',
            type: 'group',
            label:'Precios',
            fields: [
                {
                    name: 'normalPrice',
                    type: 'number',
                    label: 'Precio Normal',
                    required: true,
                },
                {
                    name: 'enabledDiscount',
                    type: 'checkbox',
                    defaultValue: false,
                    label: 'Habilitar Descuento',
                },
                {
                    name: 'discountPrice',
                    type: 'number',
                    label: 'Precio con Descuento',
                    admin: {
                        condition: (_, siblingData ) => {
                            return siblingData?.enabledDiscount === true;
                        },
                    },
                },
            ],
        },
        {
            name: 'variations',
            type: 'array',
            label: 'Variaciones',
            fields: [
                {
                    name: 'colorName',
                    type: 'text',
                    label: 'Nombre del Color',
                    required: true,
                },
                {
                    name: 'image',
                    type: 'upload',
                    label: 'Imagen',
                    relationTo: 'media',
                    required: true,
                },
                {
                    name: 'stockPerSize',
                    type: 'array',
                    label: 'Stock por Talle',
                    required: true,
                    fields: [
                        {
                            name: 'size',
                            type: 'select',
                            label: 'Talle',
                            options: [
                                { label: 'S', value: 's' },
                                { label: 'M', value: 'm' },
                                { label:'L', value: 'l' },
                                { label: 'Talle Único', value: 'talle_unico'},
                            ],
                            required: true,
                        },
                        {
                            name: 'quantity',
                            type: 'number',
                            label: 'Cantidad',
                            required: true, 
                        },
                    ],
                },
            ]
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            label: 'Categorías',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            label: 'Imagenes',
            relationTo: 'media',
        }
    ],
};

export default Products;