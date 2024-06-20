# SonarCloud
SonarCloud is a cloud-based code quality platform that provides automated code analysis for software projects. It is a service offered by SonarSource, a company that provides open-source tools for software quality analysis and management. In particular, SonarCloud is used for "static code analysis".
- static code analysis v. dynamic code analysis
    - Static is where we analyze the code without running it
    - Dynamic is where we analyze the code by running it (identifying code coverage)

SonarCloud helps to track and manage technical debt, identify bugs, vulnerabilities, and security issues in our code, and improve the overall quality of our software. It supports many popular programming languages, including Java, C#, JavaScript, and Python, among others.

With SonarCloud, you can easily set up and configure code analysis for your projects and get insights into code quality and technical debt. The platform provides a web-based interface that allows us to easily view code quality metrics, track evolution of code quality over time, etc.

## Technical Debt
Technical debt, in the context of software development, refers to the cost of maintaining and fixing a codebase due to shortcuts, compromises, or quick fixes that were made during development. Technical debt accumulates over time as the codebase grows, making it more difficult and time-consuming to add new features or make changes.

Technical debt can arise from a variety of sources, including
1. Lack of code documentation: when code is not properly documented, it becomes difficult for other developers to understand how it works, which makes it harder to work on new features or make changes
2. Poor code quality: code that is poorly written or structured can be difficult to maintain and can lead to bugs and other issues
3. Shortcuts in Development: Taking shortcuts during development, such as skipping out on writing unit tests or not following best practices, can lead to technical debt
4. Quick fixes: Making quick fixes to resolve problems in the short term can lead to technical debt if the true underlying issues are not resolved

Managing Technical Debt
- Regular code reviews
- Implementing best practices
- Using tools such as SonarCloud (static code analysis tool)
- Incrementally develop and test as you go
