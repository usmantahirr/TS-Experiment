# Peer Programming Challenge

Hi, I was in a lot of pressure and the environment wasn't that I am used to. I was able to think through a solution but
wasn't satisfied with the end result

I spent some time (45m) to write down the exact same solution I made on board. Just to showcase how it will work in
real life

## Features

I am using Clean Code Infrastructure, Usually I mix it with Vertical Slice Architecture

This is how I define the layers:

OuterMost Layers (Presentation/Infrastructure)
points to Application
core is Domain

Logic movement is => Presentation/Infrastructure -> Application -> Domain

### Presentation

- Entry Point
- Contains base execution
- Controllers
- Ex: WebAPI, CLI, Cron Job, Function

### Infrastructure

- Database (Connects to domain layer through interface in application)
- Contains the Eventbus, Email Service
- Implementation of Interfaces that application layer needs
- Relates to domain indirectly (Through Application Layer)
- Ex: Implements a repository from application layer, but repository always have DTOs from Domain layer

### Domain

- Enterprise wide business logic
- Normally defines DTO (Data Transfer Objects)
- Core Business Logic sits here
- Can be shared with other parts of applications if required
- Ex: Rules and Score will be defined here
- Ex: ScoreObject will be defined here

### Application

- Application wide logic
- Can't be shared with other applications because it's specific to this app
- interface for I/O
- Ex: Implementation of Score/Rules and ScoreObject will be here (Services)

### Main Component

- Glues everything together/Bootstraps the application
- Knows about everything
- Connects everything to everything

main() -> Controllers -> Use Cases
main() -> Frameworks

--------------
The implementation has rules defined inside validators

- I am getting an error assigning the parent interface to child ones, so the code isn't really working but it can be
  considered a boilerplate.
- It should run once I find a solution for assigning class names to the interface it's implementing
- I didn't debug it or tried finding a solution because I wanted to time bound it for 45 minutes including writing docs
  and email. But you'll get the idea what I meant when I was drawing the solution on board.