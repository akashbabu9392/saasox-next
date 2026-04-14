export type ServiceDetailsRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  introParagraphs: string[];
  sectionHeading: string;
  sectionParagraph: string;
  bulletPoints: string[];
  galleryImages: Array<{ src: string; alt: string }>;
  outroParagraphs: string[];
};

export const serviceDetailsDb: ServiceDetailsRecord[] = [
  {
    slug: "service-details",
    breadcrumbTitle: "Service Details",
    metaTitle: "Service Details",
    metaDescription: "Service details",
    bannerImageSrc: "/assets/img/service_img-1.jpg",
    bannerImageAlt: "Service details banner",
    introParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    sectionHeading:
      "Boost your brand with the help of our creative agency's UX design.",
    sectionParagraph:
      "Enhance your brand’s impact with our creative agency's expert UX design services. We’ll craft engaging and intuitive user experiences that elevate your brand and captivate your audience.",
    bulletPoints: [
      "consectetur placerat augue vestibulum",
      " adipiscing elit Etiam aliquam, enim vitae",
      "Mauris tincidunt a eget facilisis  Quisque",
      "Donec at augue ante Nam posuere mauris",
      "Lorem ipsum dolor sit amet, consectetur",
      "quis pretium elit placerat id Fusce egestas",
    ],
    galleryImages: [
      { src: "/assets/img/service_img-2.jpg", alt: "Service image" },
      { src: "/assets/img/service_img-3.jpg", alt: "Service image" },
    ],
    outroParagraphs: [
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim, ",
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. ",
    ],
  },
];

export function getServiceDetailsBySlug(slug: string) {
  return serviceDetailsDb.find((s) => s.slug === slug) ?? null;
}

