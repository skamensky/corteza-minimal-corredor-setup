# What

A simple POC for setting up corredor server in [corteza](https://github.com/cortezaproject/corteza-server).
The app includes a workflow that interacts with a corredor script. The corredor script updates corteza.

See my [forum post](https://forum.cortezaproject.org/t/show-corteza-a-poc-github-repo-for-corredor-server/1058) for a bit of additional context.

# Why

I’ve notice that a lot of people are struggling to set up corredor server.

I also struggled. In the end I got it working (after many hours of debugging and mucking around docker).

To save future community member time and sweat, I’ve created a github repository which enabled you to easily start up an instance of corteza with the corredor server running.



# Demo
https://user-images.githubusercontent.com/19151369/193456412-33f8d9e0-7dfa-4bc1-a79c-f4eab2235999.mp4


# Install
Clone this repo and then run 

`docker compose up`

# Login
After the application is running login with these credentials

Login url: http://localhost:8080/auth/login

Username: `shmuelkamensky@gmail.com`

Password: `ja5SUZnV7e@WJMV`

Click [here](http://localhost:8080/compose/ns/crm/pages/304468055408181252/record/304478142574231556) to access the test account shown in the demo video.