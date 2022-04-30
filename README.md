git add -- . ':!node_modules' ----> which is used to skip or ignore for commiting or adding to git tracking.

Stage and Stages

Stage keyword is used in a job to define which stage that job is part of

Stages define the order of execution of jobs or group of jobs.


Default is test stage if stage is not mentined.

Gitlab has 5 default stages, which execute in the below order:

1. .pre
2. build
3. test
4. deploy
5. .post

2,3 and 4 stages can be explicitly change the oder.

ARTIFACTS

Job Artifacts are a list of files and directories acreated by a job once it finishes.

Note: file with art in name is blongs to artifact job.

GITLAB RUNNERS

An application that works with GItlab CICD to pick and execute CI/CD jobs.

Open-Source and written in Go language

You can add or remove runners into your GitLab architecture

GitLab offers several shared runners available to every project in a GitLab instance.

GitLab Runner application can be installed on infrastructure that you own or manage.

