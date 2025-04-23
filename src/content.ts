import { getCollection } from 'astro:content';
import { isTutorialEntry } from './content.config';

export const allPages = await getCollection('docs');
export const tutorialPages = allPages.filter(isTutorialEntry);
