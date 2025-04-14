import { defineCollection, z } from '@nuxt/content'

const variantEnum = z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link'])
const colorEnum = z.enum(['primary', 'secondary', 'neutral', 'error', 'warning', 'success', 'info'])
const sizeEnum = z.enum(['xs', 'sm', 'md', 'lg', 'xl'])
const orientationEnum = z.enum(['vertical', 'horizontal'])

const baseSchema = {
  title: z.string().nonempty(),
  description: z.string().nonempty()
}

const linkSchema = z.object({
  label: z.string().nonempty(),
  to: z.string().nonempty(),
  icon: z.string().optional(),
  size: sizeEnum.optional(),
  trailing: z.boolean().optional(),
  target: z.string().optional(),
  color: colorEnum.optional(),
  variant: variantEnum.optional()
})

const imageSchema = z.object({
  src: z.string().nonempty(),
  alt: z.string().optional(),
  loading: z.string().optional(),
  srcset: z.string().optional()
})

const featureItemSchema = z.object({
  ...baseSchema,
  icon: z.string().nonempty()
})

const sectionSchema = z.object({
  headline: z.string().optional(),
  ...baseSchema,
  features: z.array(featureItemSchema)
})

export const collections = {
  index: defineCollection({
    source: '0.index.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty(),
      hero: sectionSchema.extend({
        headline: z.object({
          label: z.string().nonempty(),
          to: z.string().nonempty(),
          icon: z.string().nonempty()
        }),
        links: z.array(linkSchema)
      }),
      sections: z.array(
        sectionSchema.extend({
          id: z.string().nonempty(),
          orientation: orientationEnum.optional(),
          features: z.array(featureItemSchema),
          links: z.array(linkSchema),
          reverse: z.boolean().optional()
        })
      ),
      features: sectionSchema.extend({
        items: z.array(featureItemSchema)
      }),
      testimonials: sectionSchema.extend({
        items: z.array(
          z.object({
            quote: z.string().nonempty(),
            user: z.object({
              name: z.string().nonempty(),
              description: z.string().nonempty(),
              to: z.string().nonempty(),
              target: z.string().nonempty(),
              avatar: imageSchema
            })
          })
        )
      }),
      cta: sectionSchema.extend({
        links: z.array(linkSchema)
      })
    })
  }),
  login: defineCollection({
    source: '1.login.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      providers: z.array(
        z.object({
          label: z.string().nonempty(),
          icon: z.string().nonempty()
        })
      )
    })
  }),
  images: defineCollection({
    source: '4.images.yml',
    type: 'data',
    schema: z.object({
      title: z.string().nonempty(),
      description: z.string().nonempty()
    })
  })
}
