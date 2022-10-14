# Project Preview
https://user-images.githubusercontent.com/105471348/195755640-cc93edc1-95ce-44a1-8b64-ee007044c402.mp4

# What is the Tribe Blog
The Tribe blog, is a blog where all the functionalities of a blog can be found. The blog incorporates an authentification system where one can sign up as an new user and also login as an existing user. The blog incorporates sessions and cookies that help with the authentification process, a user once signed in does not need to keep signing back in when they refresh or leave the page.

# Installation
To install the blog to your machine you will need to clone it first through the following command
```
git@github.com:G-2-Sigma/phase-4-project-group-2-TheTribe.git
```

Once you have cloned the repository to your folder of choice open it on your code editor of choice then
```
cd phase-4-project-group-2-TheTribe
```

Then run 
```
bundle install
```
Next open up another terminal and run
```
cd client
```
Once in the client folder run

```
npm install
```
Finally move back one folder with the command
```
cd ..
```

Then run the following command on the terminal you ran bundle install
```
rails server
```
Then run the following command on the terminal you ran npm install
```
npm start --prefix client
```
# This project used the following tech stack
React and bootstrap for the front-end
Ruby on Rails for the backend

