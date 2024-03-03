# Igniting our app

Que.1 What is NPM ?
Ans: It is a tool used for package management and the default package manager for Node projects. NPM is installed when NodeJS is installed on a machine. It comes with a command-line interface (CLI) used to interact with the online database of NPM. This database is called the NPM Registry, and it hosts public and private 'packages.' To add or update packages, we use the NPM CLI to interact with this database.

◦ npm alternative is yarn

# Finding the path
# useEffect
// if no dependency array => useEffect is called on every render
// if dependency array is empty = [] => useEffect is called on initial render(just once)
// if dependency array is [loginBtn] => useEffect is called everytime loginBtn is updated

useEffect(() => {
console.log("useEffect Called");
}, [loginBtn]);

# Two types of routing in web apps
- Client side routing
- Server side routing