// template literal

// a function to concatenate strings

const createMessage = (item, quantity) => {
  return `You have ${quantity} ${item}${quantity > 1 ? "s" : ""}`
}
console.log(createMessage("apple", 3))
console.log(createMessage("guava", 1))

// function to create a URL

const generateUrl = (endpoint, params) => {
  return `https://api.example.com/${endpoint}?${params}`
}

console.log(generateUrl("users", "page=1&limit=10"))