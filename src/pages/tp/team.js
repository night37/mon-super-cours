
const container = document.querySelector('.container')
const card = document.createElement('div')
card.classList.add(["card"])
card.classList.add("bg-base-100")
card.classList.add("w-96")
card.classList.add("shadow-sm")
const image = document.createElement('img')
image.src =  "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
card.append(image)




container.append(card)

console.log(container);