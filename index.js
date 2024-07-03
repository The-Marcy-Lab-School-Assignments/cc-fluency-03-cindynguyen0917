const users = [
    {
        name: 'Reuben',
        username: '@blood_pressure_killa',
        followers: 1,
        verified: false,
        bio: "It's an honor and a privilege."
    },
    {
        name: 'Laisha',
        username: '@passaic_papi',
        followers: 700,
        verified: true,
        bio: "My commute is longer than yours."
    },
    {
        name: 'Anne',
        username: '@i_love_bambas',
        followers: 12,
        verified: false,
        bio: "@mayabee is my best friend"
    },
    {
        name: 'Steph',
        username: '@queen_of_the_kew',
        followers: 1200,
        verified: false,
        bio: "✌🏼"
    },
    {
        name: 'Carmen',
        username: '@omar_apollo_fanclub',
        followers: 1200000,
        verified: true,
        bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21."
    }
]



const logAllNames = (arr) => {
    arr.forEach((user) => console.log(user.name))
}

logAllNames(users)

const getAllTags = (arr) => {
    arr.forEach((user) => console.log(`Hi my name is ${user.name}, and my tag is ${user.username}!`))
}
getAllTags(users)

const sumAllFollowers = (arr) => {
    return (arr.map((user) => user.followers).reduce((total, current) => total + current, 0))
}

sumAllFollowers(users)

const searchUsername = (arr, str) => {
    return (arr.filter((user) => user.username === str))
}

searchUsername(users, "@passaic_papi")

const longWinded = (arr) => {
    let longestBio = '';
    arr.forEach((user) => {
        if (user.bio.length > longestBio.length) {
            longestBio = user.bio
        }
    })
    // console.log(longestBio)
    return (arr.filter((user) => user.bio === longestBio))
}

longWinded(users)

const follower = (arr) => {
    return console.log((arr.sort((a, b) => a.followers - b.followers)))
}

follower(users)