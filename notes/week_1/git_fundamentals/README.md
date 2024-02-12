# Git Fundamentals

## Source Control Management

### Overview

- Source Control Management (SCM) tools help manage and track changes to software code over time.
- **Git** is the most widely used SCM tool, providing powerful features for tracking changes, collaborating on projects, and managing code history.
- SCM tools can be categorized into Version Control Systems (VCS), Centralized Version Control Systems (CVCS), and Distributed Version Control Systems (DVCS).
- Git falls under the DVCS category, allowing every user to have a full copy of the entire repository, including its history.

## Git Fundamentals

### Basics

- Git tracks changes in a series of snapshots, allowing users to revert to previous versions of a project, compare changes over time, and collaborate with others.
- Key concepts include commits, branches, merges, and tags.
- Commits are snapshots of your repository at a given time.
- Branches allow you to diverge from the main line of development to work on new features or fixes.
- Merging brings changes from different branches together.
- Tags are used to mark specific commits, often used for releases.

## Initializing a Repo

### Starting a New Repository

- Use `git init` to initialize a new Git repository in your project folder.
- Example: `git init`
    - This command creates a new `.git` directory in your project, which Git uses to track changes.

## Pushing to a Remote Repo

### Connecting to a Remote Repository

- Remote repositories are versions of your project hosted on the internet or network.
- Use `git remote add origin URL` to connect your local repository to a remote server.
- Example: `git remote add origin https://github.com/yourusername/yourrepository.git`
    - This command links your local repository with a remote repository located at the given URL.
- Use `git push -u origin master` to push your commits to the remote repository.
    - The `-u` flag sets the upstream branch for future reference.

## Git Commands

- **Commit**
  - `git commit -m "Your commit message"`
    - Saves your changes to the local repository with a descriptive message about what you've changed.
- **Branch**
  - `git branch branchname`
    - Creates a new branch called `branchname`.
  - `git checkout branchname`
    - Switches to the branch called `branchname`.
- **Merge**
  - `git merge branchname`
    - Merges the changes from `branchname` into the current branch.
- **Push**
  - `git push origin branchname`
    - Pushes the changes from your local `branchname` to the remote repository.
- **Pull**
  - `git pull origin branchname`
    - Updates your local branch with changes from the remote `branchname`, merging them if necessary.

### Resources

https://learngitbranching.js.org
