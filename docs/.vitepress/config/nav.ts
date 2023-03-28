export default [
  {
    text: "About",
    link: "/about",
    activeMatch: "/about",
  },
  {
    text: "Guides",
    activeMatch: "/guides/",
    items: [
      {
        text: "3D Printing",
        link: "/guides/3d-printing/",
        activeMatch: "/guides/3d-printing/",
      },
      {
        text: "Cyber Security",
        link: "/guides/cybersecurity/",
        activeMatch: "/guides/cybersecurity/",
      },
      {
        text: "Electronics",
        link: "/guides/electronics/",
        activeMatch: "/guides/electronics/",
      },
      {
        text: "Python",
        link: "/guides/python/",
        activeMatch: "/guides/python/",
      },
      { text: "Rust", link: "/guides/rust/", activeMatch: "/guides/rust/" },
      { text: "Java", link: "/guides/java/", activeMatch: "/guides/java/" },
    ],
  },
  {
    text: "NCEA",
    activeMatch: "/ncea/",
    items: [
      {
        text: "NCEA Level 1",
        link: "/ncea/level-1/",
        activeMatch: "/ncea/level-1/",
      },
      {
        text: "NCEA Level 2",
        link: "/ncea/level-2/",
        activeMatch: "/ncea/level-2/",
      },
      {
        text: "NCEA Level 3",
        link: "/ncea/level-3/",
        activeMatch: "/ncea/level-3/",
      },
    ],
  },
];
