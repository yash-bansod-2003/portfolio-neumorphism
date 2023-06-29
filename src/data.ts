
export interface Skill {
    name: string;
    icon: string;
    description: string;
}

export interface Education {
    name: string;
    school: string;
    board: string;
    duration: string;
    score: number;
}


export const skills: Array<Skill> = [
    {
        name: 'Mongo DB',
        icon: '<i class="cib-mongodb"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Node JS',
        icon: '<i class="fa-brands fa-node-js"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'React JS',
        icon: '<i class="fa-brands fa-react"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Express JS',
        icon: `<img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"alt>`,
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Graph QL',
        icon: '<i class="cib-graphql"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'AWS',
        icon: '<i class="cib-amazon-aws"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Strapi',
        icon: '<i class="cib-strapi"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'MySql',
        icon: '<i class="cib-mysql"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Css 3',
        icon: '<i class="cib-css3-shiled"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Javascript',
        icon: '<i class="cib-javascript"></i>',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    },
    {
        name: 'Appwrite',
        icon: '<img src="/appwrite.svg">',
        description: "Lorem ipsum dolor sit amet, consectet adipisicing elit. In dolor facere"
    }
]



export const education: Array<Education> = [

    {
        name: 'secondary',
        board: 'central board of secondary education',
        school: 'jawahar navodaya vidyalaya amravati',
        duration: '2017 - 2018',
        score: 82
    },
    {
        name: 'higher secondary',
        board: 'central board of secondary education',
        school: 'jawahar navodaya vidyalaya amravati',
        duration: '2019 - 2020',
        score: 84
    },
    {
        name: 'under graduate',
        board: 'sant gadage baba university amravati',
        school: 'sipna collage of engineering and technology amravati',
        duration: '2021 - 2022',
        score: 10
    }
]