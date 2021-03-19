This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Dependencies used

I used the following dependencies in this project:

- [Next Js](https://nextjs.org/) - I have decided to do the project with Next js because I never made an application with this framework and I loved it. 
- [Cypress](https://www.npmjs.com/package/cypress) - I used cypress to do the testing because I had never used it before and I like to learn the most modern technologies. I liked it and I have enjoyed the tests.
- [start-server-and-test](https://www.npmjs.com/package/start-server-and-test) - I decide to use this dependency because I realized that when I run the test with cypress the server was down and using this dependency I could run the server and then run the tests.
- [Bootswatch](https://bootswatch.com/) - I chose Bootswatch because it helps me to create components faster and the integration with Next js was easy. I usually use Material UI in my projects but in this time I wanted to switch.


## Improvements

The improvements I would do:

- Handle errors. Currently if you type in the url a character id that not exist, the app breaks instead of send you a messagge telling you that id does not exist and for example redirect you to the home page.
- The searching. In the home page, if you search a character when you remove the query you get the default page instead of the last page you was in.
