import purgecss from "@fullhuman/postcss-purgecss";

export default {
  plugins: [
    purgecss({
      content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx,html}"],
      safelist: () => ({
        //standard: [/^btn/, /^alert/], // Add patterns to safelist
      }),
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
};
