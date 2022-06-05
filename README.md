## Overview

A simple app that uses the [icanhazdadjoke API](https://icanhazdadjoke.com/api)

### Features

Users should be able to:

- Click the button for laughs
- View the optimal layout for the app depending on their device's screen size

### Screenshot

![](./images/Screenshot%202022-06-05%20140959.png)

### Links

- Live Site URL: [https://selt0.github.io/dadjokesAPI/](https://selt0.github.io/dadjokesAPI/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- [Bootstrap](https://getbootstrap.com/)
- Mobile-first workflow

### What I learned

I learned that some APIs require certain headers. Thankfully headers can easily be added by using the additonal parameters in fetch

```js
async function fetchJoke() {
  const res = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: "application/json"
    },
  })
}
```

### Continued development

I want to continue practicing implementing APIs in my projects. As I get comfortable with them, I will start creating bigger projects that handle more data

## Author

- Website - [Michael Martinez](https://michael-martinez.netlify.app/)
- Twitter - [@MMocomochi](https://twitter.com/MMocomochi)
