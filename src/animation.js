export const fadeIn = {
    hidden: {
        opacity : 0,

    },
    show:{
        opacity: 1,
        transiton:{
            duration: 0.75,
        },
        exit:{
            opacity: 0,
            transiton: {duration:.075},

        },
    },
};

export const popup = {
    hidden: {
        opacity : 0,
        scale:0.5,
    },
    show:{
        opacity: 1,
        scale: 1,
        transiton:{
            duration: 0.75,
        },
        exit:{
            opacity: 0,
            transiton: {duration:.075},

        },
    },
};