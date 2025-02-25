# Archetype Plugin

The Archetype plugin provides a task to compile Archetype smart contracts (`.arl`) to Michelson `.tz` files

## Requirements

- Taqueria v0.26.0 or later
- Node.js v16.17.1 or later
- Docker v20.10.12 or later

## Installation

To install the Archetype plugin on a Taqueria project, navigate to the project folder and run:
```shell
taq install @taqueria/plugin-archetype
```

> ### :page_with_curl: Note
> You can override the Archetype version used by the plugin by creating the environment variable `TAQ_ARCHETYPE_IMAGE` and setting it to your desired Ligo Docker image

## Configuration

No additional configuration is available

## Usage

The Archetype plugin exposes a `taq compile` task in Taqueria which can target a single Archetype contract in the `contracts` folder and compile it to a Michelson `.tz` file output to the `artifacts` folder

The Archetype plugin also exposes a contract template via the `taq create archetypeContract <contractName>` task. This task will create a new Archetype contract in the `contracts` directory and insert archetype contract boilerplate for you

### Running the Compile Task

The Archetype plugin's `taq compile` task requires at least one argument. The basic syntax for the task is `taq compile <contractName>`

Running the `compile` task with no arguments will result in no Archetype smart contracts being compiled to Michelson files in the `artifacts` folder

> ### :warning: CAUTION
> The `compile` task is implemented by more than one compiler plugin (Archetype, LIGO, SmartPy). If more than one of these plugins are installed on a project, you need to use the `--plugin archetype` flag to specify the particular Archetype compiler. For example `taq compile --plugin archetype`

### Options

There are no additional options available for this plugin

## Tasks

### The `taq compile` Task

The `compile` task is used for compiling Archetype smart contracts to Michelson and the task has the following structure:

```shell
taq compile <contractName>
```

The task takes a filename as a required argument. If no filename is provided, Taqueria will compile no Archetype files from the `contracts` directory

#### Task Properties

|  attribute |  value                        | 
|------------|:-----------------------------:|
|  task      | 'compile'                     | 
|  command   | 'compile < contractName >'    | 
|  aliases   | ['c', 'compile-archetype']    |  

### The `create archetypeContract` Task

The `create archetypeContract` task is used to create a new Archetype contract from a template. Running this task will create a new Archetype smart contract in the `contracts` directory
    
```shell
taq create archetypeContract <contractName>
```

The task takes a filename and a required positional argument. The filename must end with `.arl`

#### Task Properties

|  attribute |  value                                         | 
|------------|:----------------------------------------------:|
|  task      | 'create archetypeContract'                     | 
|  command   | 'create archetypeContract < contractName >'    | 

## Plugin Architecture

This is a plugin developed for Taqueria built on NodeJS using the Taqueria Node SDK and distributed via NPM

Docker is used under the hood to provide a self contained environment for Archetype to prevent the need for it to be installed on the user's local machine