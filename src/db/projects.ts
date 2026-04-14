export type ProjectDetailsRecord = {
  slug: string;
  breadcrumbTitle: string;
  metaTitle: string;
  metaDescription: string;
  bannerImageSrc: string;
  bannerImageAlt: string;
  info: {
    clientLabel: string;
    categoryLabel: string;
    locationLabel: string;
  };
  mainHeading: string;
  mainParagraphs: string[];
  challengesHeading: string;
  challengesParagraph: string;
  challengeBullets: Array<{ title: string; content: string }>;
  relatedProjects: Array<{ slug: string; title: string; imageSrc: string }>;
};

export const projectDetailsDb: ProjectDetailsRecord[] = [
  {
    slug: "project-details",
    breadcrumbTitle: "Project Details",
    metaTitle: "Project Details",
    metaDescription: "Project details",
    bannerImageSrc: "/assets/img/project-img-9.jpg",
    bannerImageAlt: "Project banner",
    info: {
      clientLabel: "Ralph Edwards",
      categoryLabel: "App Landing",
      locationLabel: "London",
    },
    mainHeading: "Interactive Design",
    mainParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    challengesHeading: "Challenges:",
    challengesParagraph:
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim,",
    challengeBullets: [
      {
        title: "Inefficient Workflow:",
        content:
          "The client faced significant delays due to manual processes and disjointed tools",
      },
      {
        title: "Poor Collaboration:",
        content:
          "Remote teams found it challenging to communicate and collaborate effectively",
      },
      {
        title: "Data Silos:",
        content:
          "Critical data was fragmented across multiple systems, making it difficult to gain insights.",
      },
    ],
    relatedProjects: [
      {
        slug: "personal-brand-design",
        title: "Personal Brand Design",
        imageSrc: "/assets/img/project-img-5.jpg",
      },
      {
        slug: "blog-webpage-design",
        title: "Blog Webpage Design",
        imageSrc: "/assets/img/project-img-6.jpg",
      },
      {
        slug: "brand-promoting",
        title: "Brand Promoting",
        imageSrc: "/assets/img/project-img-7.jpg",
      },
    ],
  },
  {
    slug: "personal-brand-design",
    breadcrumbTitle: "Project Details",
    metaTitle: "Personal Brand Design",
    metaDescription: "Personal Brand Design project",
    bannerImageSrc: "/assets/img/project-img-9.jpg",
    bannerImageAlt: "Project banner",
    info: {
      clientLabel: "Ralph Edwards",
      categoryLabel: "App Landing",
      locationLabel: "London",
    },
    mainHeading: "Interactive Design",
    mainParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    challengesHeading: "Challenges:",
    challengesParagraph:
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim,",
    challengeBullets: [
      {
        title: "Inefficient Workflow:",
        content:
          "The client faced significant delays due to manual processes and disjointed tools",
      },
      {
        title: "Poor Collaboration:",
        content:
          "Remote teams found it challenging to communicate and collaborate effectively",
      },
      {
        title: "Data Silos:",
        content:
          "Critical data was fragmented across multiple systems, making it difficult to gain insights.",
      },
    ],
    relatedProjects: [
      {
        slug: "personal-brand-design",
        title: "Personal Brand Design",
        imageSrc: "/assets/img/project-img-5.jpg",
      },
      {
        slug: "blog-webpage-design",
        title: "Blog Webpage Design",
        imageSrc: "/assets/img/project-img-6.jpg",
      },
      {
        slug: "brand-promoting",
        title: "Brand Promoting",
        imageSrc: "/assets/img/project-img-7.jpg",
      },
    ],
  },
  {
    slug: "blog-webpage-design",
    breadcrumbTitle: "Project Details",
    metaTitle: "Blog Webpage Design",
    metaDescription: "Blog Webpage Design project",
    bannerImageSrc: "/assets/img/project-img-9.jpg",
    bannerImageAlt: "Project banner",
    info: {
      clientLabel: "Ralph Edwards",
      categoryLabel: "App Landing",
      locationLabel: "London",
    },
    mainHeading: "Interactive Design",
    mainParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    challengesHeading: "Challenges:",
    challengesParagraph:
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim,",
    challengeBullets: [
      {
        title: "Inefficient Workflow:",
        content:
          "The client faced significant delays due to manual processes and disjointed tools",
      },
      {
        title: "Poor Collaboration:",
        content:
          "Remote teams found it challenging to communicate and collaborate effectively",
      },
      {
        title: "Data Silos:",
        content:
          "Critical data was fragmented across multiple systems, making it difficult to gain insights.",
      },
    ],
    relatedProjects: [
      {
        slug: "personal-brand-design",
        title: "Personal Brand Design",
        imageSrc: "/assets/img/project-img-5.jpg",
      },
      {
        slug: "blog-webpage-design",
        title: "Blog Webpage Design",
        imageSrc: "/assets/img/project-img-6.jpg",
      },
      {
        slug: "brand-promoting",
        title: "Brand Promoting",
        imageSrc: "/assets/img/project-img-7.jpg",
      },
    ],
  },
  {
    slug: "brand-promoting",
    breadcrumbTitle: "Project Details",
    metaTitle: "Brand Promoting",
    metaDescription: "Brand Promoting project",
    bannerImageSrc: "/assets/img/project-img-9.jpg",
    bannerImageAlt: "Project banner",
    info: {
      clientLabel: "Ralph Edwards",
      categoryLabel: "App Landing",
      locationLabel: "London",
    },
    mainHeading: "Interactive Design",
    mainParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
    ],
    challengesHeading: "Challenges:",
    challengesParagraph:
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim,",
    challengeBullets: [
      {
        title: "Inefficient Workflow:",
        content:
          "The client faced significant delays due to manual processes and disjointed tools",
      },
      {
        title: "Poor Collaboration:",
        content:
          "Remote teams found it challenging to communicate and collaborate effectively",
      },
      {
        title: "Data Silos:",
        content:
          "Critical data was fragmented across multiple systems, making it difficult to gain insights.",
      },
    ],
    relatedProjects: [
      {
        slug: "personal-brand-design",
        title: "Personal Brand Design",
        imageSrc: "/assets/img/project-img-5.jpg",
      },
      {
        slug: "blog-webpage-design",
        title: "Blog Webpage Design",
        imageSrc: "/assets/img/project-img-6.jpg",
      },
      {
        slug: "brand-promoting",
        title: "Brand Promoting",
        imageSrc: "/assets/img/project-img-7.jpg",
      },
    ],
  },
];

export function getProjectDetailsBySlug(slug: string) {
  return projectDetailsDb.find((p) => p.slug === slug) ?? null;
}

