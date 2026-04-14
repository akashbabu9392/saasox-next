export type TeamMemberRecord = {
  slug: string;
  name: string;
  role: string;
  imageSrc: string;
  imageAlt: string;
  bioParagraphs: string[];
  phoneHref: string;
  phoneLabel: string;
  emailHref: string;
  emailLabel: string;
  locationLabel: string;
  aboutHeading: string;
  aboutParagraphs: string[];
  aboutBulletPoints: string[];
};

export const teamDb: TeamMemberRecord[] = [
  {
    slug: "olivia-martinez",
    name: "Olivia Martinez",
    role: "Gemini market",
    imageSrc: "/assets/img/team-img-7.jpg",
    imageAlt: "Team image",
    bioParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision ",
      "Aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
    ],
    phoneHref: "tel:+9156980036420",
    phoneLabel: "+91 5698 0036 420",
    emailHref: "mailto:info@Reiatix.com",
    emailLabel: "info@Reiatix.com",
    locationLabel: "26 Manor St, Braintree UK",
    aboutHeading: "About Olivia Martinez",
    aboutParagraphs: [
      "Our UI/UX design services are crafted to elevate your digital presence with precision and creativity. We begin by understanding your goals and your audience, ensuring that every design decision aligns with your brand’s vision. Our approach integrates user research, wireframing, and prototyping to create intuitive and engaging interfaces.",
      "We focus on delivering seamless user experiences that drive engagement and satisfaction. From concept to launch, our team is dedicated to design solutions that are not only visually appealing but also functionally robust. We continuously test and refine our designs to meet the highest standards of usability.",
      "Nam posuere mauris enim, quis pretium elit placerat id  Fusce egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet venenatis  className aptent taciti sociosqu ad litora torent per conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem. Etiam vestibulum ligula quis nisl feugiat, consectetur placerat augue vestibulum  Nulla aliquam elit eu diam pharetra.Nam posuere mauris enim,",
    ],
    aboutBulletPoints: [
      "consectetur placerat augue vestibulum",
      "Mauris tincidunt a eget facilisis  Quisque ",
      "Lorem ipsum dolor sit amet, consectetur ",
    ],
  },
];

export function getTeamMemberBySlug(slug: string) {
  return teamDb.find((m) => m.slug === slug) ?? null;
}

