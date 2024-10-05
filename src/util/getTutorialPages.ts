import path from 'node:path';
import type { TutorialEntry } from '../content/config';

/** Get a full list of pages for the tutorial. */
export function getTutorialPages(allPages: TutorialEntry[]) {
	const pages = allPages.map((page) => {
			return {...(page as TutorialEntry)};
		})
		.sort((a, b) => {
			const aPath = path.parse(a.id);
			const bPath = path.parse(b.id);
			// Directories are numbered so pages in different directories can be sorted easily.
			const aPathDir = path.basename(aPath.dir);
			const bPathDir = path.basename(bPath.dir);
			if (aPathDir < bPathDir) return -1;
			if (aPathDir > bPathDir) return 1;
			// Index files should come first within a directory.
			if (aPath.name === 'index') return -1;
			if (bPath.name === 'index') return 1;
			// Other files within a directory are numbered and sorted ascending.
			return aPath.name < bPath.name ? -1 : aPath.name > bPath.name ? 1 : 0;
		});
	return pages;
}

/** Turn a flat list of tutorial pages into a hierarchical array of units and lessons. */
export function getTutorialUnits(tutorialPages: TutorialEntry[]) {
	return tutorialPages.reduce(
		(units, page) => {
			if (page.data.unitTitle) {
				units.push({
					title: page.data.unitTitle,
					lessons: [page],
				});
			} else {
				units.at(-1)?.lessons.push(page);
			}
			return units;
		},
		[] as { title: string; lessons: typeof tutorialPages }[]
	);
}