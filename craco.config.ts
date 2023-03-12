const emotionBabelPreset = require('@emotion/babel-preset-css-prop')
    .default(
        undefined,
        {}
    );

export default {
    babel: {
        plugins: [
            ...emotionBabelPreset.plugins
        ]
    }
};
