import { appSchema, tableSchema } from '@nozbe/watermelondb'

export const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'notes',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'desc', type: 'string',  },
        { name: 'created_at', type: 'number',  },
      ]
    }),
  ]
})