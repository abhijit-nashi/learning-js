//Addition using Currying

function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        };
    };
};
console.log(add(2)(3)(4))

//or
let res = (a) => (b) => (c) => a+b+c;
console.log(res(1)(2)(4));



//Writing mail using currying
function mail(to1){
    return function (subject1){
        return function (body1){
            console.log(`${to1} ${body1} ${subject1}`) 
        }
    }
}
mail("nashi@email.com")("Timepass")("Okbye")

//or

let email = (to) => (subject) => (body) => ` Writing this mail ${to} with subject - ${subject}: and body ${body}`

let s1 = email("abhi@email.com")
let s2 =s1("Leave Letter")
console.log(s2("Having some house function"))