// Uploaded in the order confirmed in GitHub. This is an initial grouping,
// not a final selection of portfolio photos; featured ordering can be changed
// without renaming or reuploading any file.
export const workPhotoSets = {
  fixtures: [
    "20170901_130516.jpg",
    "20170901_130707.jpg",
    "20170901_130735.jpg",
    "20170902_130503.jpg",
    "20170902_130531.jpg",
    "20170905_105756.jpg",
    "20191106_094916.jpg",
    "20200901_165934.jpg",
    "IMG_2961.jpg",
    "Resized_20181107_083635.jpeg",
    "20220630_115250.jpg",
    "20220630_115500.jpg",
    "20220630_160016.jpg",
    "20220630_160042.jpg",
    "20220630_160051.jpg",
  ],
  leaks: [
    "20200923_150403.jpg",
    "20231101_144257.jpg",
    "20231103_154510.jpg",
    "20250523_100517.jpg",
    "20250617_154807.jpg",
    "20250625_093051.jpg",
    "20250825_160003.jpg",
    "20251031_124024.jpg",
    "20260218_145638.jpg",
    "20260415_160216.jpg",
    "20260604_144611.jpg",
    "20260619_144612.jpg",
    "20260819_115215.jpg",
    "20260819_120840.jpg",
    "IMG_0439.jpg",
  ],
  installations: [],
} as const;

export type WorkPhotoCategory = keyof typeof workPhotoSets;

export function photosForCategory(category: WorkPhotoCategory) {
  const titles: Record<WorkPhotoCategory, string> = {
    fixtures: "Fixtures",
    leaks: "Leaks & Piping",
    installations: "New Installations & Upgrades",
  };
  return [...workPhotoSets[category]].map((filename) => ({
    src: `/work-photos/${encodeURIComponent(filename)}`,
    alt: `Plumbing project photo — ${titles[category]}`,
    caption: titles[category],
  }));
}
