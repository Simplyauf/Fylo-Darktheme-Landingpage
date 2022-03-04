module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        CTACyan: "hsl(176, 68%, 64%)",
        CTABlue: "hsl(198, 60%, 50%)",
        CTARed: "hsl(0, 100%, 63%)",
        TestimonialBlue: "hsl(219, 30%, 18%)",
        FooterBlue: " hsl(216, 53%, 9%)",
        MainBg: "hsl(218, 28%, 13%)",
        SignUpBlue: "hsl(217, 28%, 15%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        Raleway: ["Raleway", "serif"],
      },
      fontWeight: {
        dark: "400",
        darker: "700",
      },
      screens: {
        laptop: "1440px",
      },
    },
  },
  plugins: [],
};
