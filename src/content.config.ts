import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from '@astrojs/starlight/loaders';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

export const collections = {
	docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
	i18n: defineCollection({
		loader: i18nLoader(),
		schema: i18nSchema({
			// Custom UI strings used by src/components/Header.astro.
			extend: z.object({
				'header.ctaLabel': z.string().optional(),
				'header.signup': z.string().optional(),
				'header.install': z.string().optional(),
				'header.installShort': z.string().optional(),
			}),
		}),
	}),
};
