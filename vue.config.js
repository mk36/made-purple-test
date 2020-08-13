module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/made-purple-test/' : '/',
    css: {
        loaderOptions: {
            sass: {
                prependData: `
          @import "@/styles/shared/_coloursAndFonts.scss";
          @import "@/styles/shared/_mixins.scss";
          @import "@/styles/shared/_variables.scss";
          @import "@/styles/shared/_breakpoints.scss";
          @import "@/styles/shared/_ui-kit.scss";
          @import "@/styles/shared/_classes.scss";
        `
            }
        }
    }
};
