# Advanced Git

## Branching
Branching is a very important concept in Git as it allows for us to more easily divide work into different branches. A branch is an alternative timeline of commits, which basically represent changes, being made. Branches are used to divide up features that are being worked on, so that a team can tackle different parts of the project at the same time.

When a particular feature is finished, the branch that the feature is on should be merged back into the `master`/`main` branch. The `master`/`main` branch is the branch that is essentially representing the "ground truth" of the state of the project. Everything that exists in the `master`/`main` branch, by convention, should be features that are finished and working. As you continue to add features by merging feature branches into the main branch, the main branch will continue to accrue additional features.

Commands for branching include:
- `git branch <branch name>`: create a new branch, starting at the same commit as the branch we are currently on
    - ex. If you are currently on the main branch, and you create a new branch, that new branch will start off in the same state as the main branch
    - Best practice: always create branches off of the main branch, since the main branch represents the "ground truth"
- `git checkout <branch name>`: switches the branch you are currently on to the branch specified in the checkout command
- `git merge <branch name>`: you can utilize this command to merge a branch into another branch
    - ex. if we are currently in the main branch, and we run `git merge feature-a`, we are merging the changes from the feature-a branch into the main branch
    - Best practice in real life is to NOT use git merge unless you need to fix merge conflicts
        - Instead, you should be pushing the feature branch to Github and then creating a pull request for the senior developers/team leads to review the code
        - When they think everything is good to go, then they will choose to merge the feature branch into the main branch
        - You should then do a git pull locally so that you update your local main branch to be the same as the remote main branch

## Pull Requests
Pull Requests are NOT a feature of Git itself. Git itself as a version control system has no concept of pull requests. Pull requests are a feature developed by Git repository hosting websites such as Github. Think of a pull request as a request to merge changes from one branch into another branch (where the request is usually reviewed by senior developers / team leads to make sure the code has no issues or is following proper coding conventions).

## Merge Conflicts
Merge conflicts can definitely be something tricky to figure out at first. There might be times when you create a pull request on Github, but it says the two branches cannot be merged together automatically because of a conflict. Or, if you run `git merge ...` locally, you might see it say that there are conflicts as well.

A merge conflict is caused when you are trying to merge one branch into another branch, but both branches have unrelated commits that modified the same line of code in a file. In these situations, Git doesn't know which change to keep. Should it keep the change to that line from the current branch, or should it keep the change from the branch being merged in, or should it keep both? This is a situation that the developer must choose themselves.

Merge conflicts must be manually resolved by the developers before changes can actually be merged.
- Typically, if a pull request cannot be merged automatically, then we will have to resort to resolving the merge conflict locally on our machines using git merge
    - In that situation, we should try to merge the main branch into the feature branch to solve the merge conflict
    - Then, you will push the feature branch to Github
    - At that point, the pull request should be able to be merged