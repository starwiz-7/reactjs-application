import getThemeColor from '@mui-treasury/utils/getThemeColor';

export default ({
    palette,
    spacing
}) => ({
    root: ({
        bgColor = 'primary.main',
        offset = '-40px',
        ...styles
    }) => ({
        backgroundColor: getThemeColor(palette, bgColor),
        borderRadius: "50%",
        margin: `${offset} auto 0`,
        width: "50%",
        height: "50%",
        ...styles,
    }),
    title: {
        color: palette.common.white,
        fontWeight: 'bold',
    },
    subheader: {
        color: 'rgba(255, 255, 255, 0.76)',
    },
});