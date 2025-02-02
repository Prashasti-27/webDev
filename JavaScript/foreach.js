const coding=["a","b","c","d","e"]


// coding.forEach(function (item) {
//     console.log(item);
    
// } )

// coding.forEach((item)=> {
//     console.log(item);
    
// } )

const myCoding= [
    {
        language: "javascript",
        filename: "js"
    },
    {
        language: "java",
        filename: "java"
    },
    {
        language: "python",
        filename: "py"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.language);
    
} )
