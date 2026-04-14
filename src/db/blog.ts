export type BlogPostRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  postedDay: string;
  postedMonth: string;
  title: string;
  categoryLabel: string;
  bodyParagraphs: string[];
};

export const blogDb: BlogPostRecord[] = [
  {
    slug: "blog-details",
    breadcrumbTitle: "Blog Details",
    metaTitle: "Blog Details",
    metaDescription: "Blog details",
    bannerImageSrc: "/assets/img/post-img-10.jpg",
    bannerImageAlt: "Post Banner",
    postedDay: "20",
    postedMonth: "Feb",
    title: "Choose The Best Service Company in the City.",
    categoryLabel: "Technology",
    bodyParagraphs: [
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
      "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
    ],
  },
  {
    slug: "how-to-comprehensive-at-saas-developments",
    breadcrumbTitle: "Blog Details",
    metaTitle: "How to Comprehensive at SaaS Developments",
    metaDescription: "How to Comprehensive at SaaS Developments",
    bannerImageSrc: "/assets/img/post-img-10.jpg",
    bannerImageAlt: "Post Banner",
    postedDay: "20",
    postedMonth: "Feb",
    title: "How to Comprehensive at SaaS Developments",
    categoryLabel: "Development",
    bodyParagraphs: [
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
      "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
    ],
  },
  {
    slug: "6-essential-tips-for-big-commerce-stores",
    breadcrumbTitle: "Blog Details",
    metaTitle: "6 Essential Tips for Big Commerce Stores",
    metaDescription: "6 Essential Tips for Big Commerce Stores",
    bannerImageSrc: "/assets/img/post-img-10.jpg",
    bannerImageAlt: "Post Banner",
    postedDay: "20",
    postedMonth: "Feb",
    title: "6 Essential Tips for Big Commerce Stores",
    categoryLabel: "Technology",
    bodyParagraphs: [
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
      "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
    ],
  },
  {
    slug: "empowering-startups-small-businesses",
    breadcrumbTitle: "Blog Details",
    metaTitle: "Empowering Startups & Small Businesses",
    metaDescription: "Empowering Startups & Small Businesses",
    bannerImageSrc: "/assets/img/post-img-10.jpg",
    bannerImageAlt: "Post Banner",
    postedDay: "20",
    postedMonth: "Feb",
    title: "Empowering Startups & Small Businesses",
    categoryLabel: "Marketing",
    bodyParagraphs: [
      "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
      "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac habitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
    ],
  },
];

export function getBlogPostBySlug(slug: string) {
  return blogDb.find((p) => p.slug === slug) ?? null;
}

