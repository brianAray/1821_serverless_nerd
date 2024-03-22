# Git Question Bank

## Level 1: Basic

1. What is Git, and how is it used in software development?
    <details>
    <summary>Answer</summary>
    Git is a distributed version control system used in software development to track changes to code over time, collaborate with other developers, and manage code releases.
    </details><br>
2. What is a commit in Git, and how is it used to save changes to a codebase?
    <details>
    <summary>Answer</summary>
    A commit in Git is a way to save changes to a codebase. It captures a snapshot of the code at a given point in time and records a message that describes the changes made.
    </details><br>
3. What is a branch in Git, and how is it used to work on different versions of a codebase simultaneously?
    <details>
    <summary>Answer</summary>
    A branch in Git is a separate version of a codebase that can be used to work on different features or bug fixes simultaneously without affecting the main codebase. It allows developers to work on different versions of the code in isolation, and merge changes back into the main codebase when they are ready.
    </details><br>
4. What is a merge conflict in Git, and how can it be resolved?
    <details>
    <summary>Answer</summary>
    A merge conflict in Git occurs when changes to a file made in two different branches cannot be automatically merged. It requires manual intervention to resolve the conflict by selecting which changes to keep or modifying the code to resolve conflicts.
    </details><br>
5. What is a remote in Git, and how is it used to collaborate with other developers?
    <details>
    <summary>Answer</summary>
    A remote in Git is a version of the codebase that is hosted on a different server or location, such as GitHub or Bitbucket. It is used to collaborate with other developers by allowing them to push changes to the remote, pull changes from the remote, and share code with others.
    </details><br>
6. What is a Git repository, and how is it used to manage code changes?
    <details>
    <summary>Answer</summary>
    A Git repository is a directory that contains a codebase and its associated Git metadata, such as commits, branches, and tags. It is used to track changes to the codebase, collaborate with other developers, and manage code releases.
    </details><br>
7. What is a pull request in Git, and how is it used to review and merge changes made by other developers?
    <details>
    <summary>Answer</summary>
    A pull request in Git is a way for developers to propose changes to the codebase and request that other developers review and merge them. It allows code changes to be reviewed and discussed before they are merged into the main codebase.
    </details><br>
8. What is Git stash, and how is it used to save changes temporarily?
    <details>
    <summary>Answer</summary>
    Git stash is a command used to save changes to a codebase temporarily without committing them. It allows developers to switch to a different branch or work on a different task without losing the changes made to the code.
    </details><br>
9. What is Git clone, and how is it used to create a local copy of a remote repository?
    <details>
    <summary>Answer</summary>
    Git clone is a command used to create a local copy of a remote repository. It allows developers to download a codebase from a remote server, work on it locally, and push changes back to the remote server.
    </details><br>
10. What is Git log, and how is it used to view the commit history of a repository?
    <details>
    <summary>Answer</summary>
    Git log is a command used to view the commit history of a Git repository. It shows a list of commits made to the repository, along with their commit messages, authors, dates, and other metadata.
    </details><br>

## Level 2: Intermediate

1. What is a rebase in Git, and how is it used to integrate changes from one branch into another?
    <details>
    <summary>Answer</summary>
    A rebase in Git is a way to integrate changes made in one branch into another branch. It applies the changes made in the source branch on top of the destination branch, creating a new linear history. It allows developers to keep their changes up to date with changes made by others in the codebase and avoid merge conflicts.
    </details><br>
2. What is a tag in Git, and how is it used to mark a specific version of the codebase?
    <details>
    <summary>Answer</summary>
    A tag in Git is a label that points to a specific commit in the history of a repository. It is used to mark a specific version of the codebase, such as a release or a stable version. Tags can be annotated with additional information, such as a message or a signature.
    </details><br>
3. What is a Git repository's working tree, and how is it used to view and modify files?
    <details>
    <summary>Answer</summary>
    A Git repository's working tree is the directory on a developer's computer where the files of the codebase are checked out and modified. It is used to view and modify files in the codebase, and changes made in the working tree can be staged and committed using Git commands.
    </details><br>
4. What is a Git hook, and how is it used to automate tasks in a Git workflow?
    <details>
    <summary>Answer</summary>
    A Git hook is a script that is executed by Git at specific points in the Git workflow, such as before or after a commit or a push. It can be used to automate tasks such as running tests, linting code, or generating documentation.
    </details><br>
5. What is Git cherry-pick, and how is it used to apply a single commit to a different branch?
    <details>
    <summary>Answer</summary>
    Git cherry-pick is a command used to apply a single commit from one branch to a different branch. It allows developers to selectively apply changes made in one branch to another branch, without merging the entire branch.
    </details><br>