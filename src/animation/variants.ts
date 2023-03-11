export const titleVariant = {
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3,
            duration: 1,
        },
    },
    hidden: { opacity: 0, scale: 0 },
};

export const homeVariant = {
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 1,
            duration: 1,
        },
    }),
    hidden: { opacity: 0 },
};
