# Taqueria SmartPy Plugin

The SmartPy plugin provides tasks to work with SmartPy smart contracts such as compiling and testing

## Requirements

- Taqueria v0.26.0 or later
- Node.js v16.17.1 or later
- Docker v20.10.12 or later
- Python 3 and pdoc

## Installation

To install the SmartPy plugin on a Taqueria project, navigate to the project folder and run:

```shell
taq install @taqueria/plugin-smartpy
```

> ### :page_with_curl: Note
> To override the SmartPy version used by the plugin, create an environmental variable `TAQ_SMARTPY_VERSION` and set it appropriately, e.g. `v0.16.0`

## The `taq compile` Task

Basic usage is:

```shell
taq compile <contractName>
```

> ### :warning: CAUTION
> The `compile` task is implemented by more than one compiler plugin (SmartPy, Archetype, SmartPy). If more than one of these plugins are installed on a project, you need to use the `--plugin smartpy` flag to specify a particular compiler

### Basic description
The SmartPy plugin exposes a `compile` task in Taqueria which can target one SmartPy contract in the `contracts` folder and compile it to a Michelson `.tz` file output to the `artifacts` folder

### A frictionless smart contract development workflow
We provide a smooth SmartPy workflow for our SmartPy plugin by making it easier to get started and maintain the contracts. You can get started by simply performing `taq compile my_contract.py` then `taq deploy my_contract.tz` (or `taq deploy my_contract.tz --env testing` to deploy to ghostnet) and now you've deployed a contract originally written in SmartPy

To benefit from this workflow, users will have to define all compilation and expression compilation targets in their main SmartPy contract file and the `compile` task will compile them all and copy the relevant artifacts (contract, storage, and expression files) to the `artifacts` folder. All other artifacts will be stored under `artifacts/.smartpy`

Compilation targets in SmartPy produce both the contract and its storage Michelson files. We will name them using the following naming convention: `<CONTRACT_NAME>.storage.<COMPILATION_TARGET_NAME>.tz`. But the first of these is special and will be called: `<CONTRACT_NAME>.default_storage.tz` (the `deploy` task of the Taquito plugin will deem this as the default initial storage value)

Expression compilation targets in SmartPy produce only the expression Michelson files (can be useful as parameter values used to invoke entrypoints with the `transfer` task of the Taquito plugin). We will name these generated `.tz` files using the following naming convention: `<CONTRACT_NAME>.expression.<COMPILATION_TARGET_NAME>.tz`

### Options

The `--json` flag will make the task emit JSON-encoded Michelson instead of pure Michelson `.tz`

## The `taq compile-all` Task

Basic usage is:

```shell
taq compile-all
```

It works just like the `compile` task but it compiles all contracts with at least one SmartPy compilation target.

## The `taq test` Task

Basic usage is:

```shell
taq test <fileName>
```

### Basic description
This task tests the SmartPy source code and reports either a failure or success

## Plugin Architecture

This is a plugin developed for Taqueria built on NodeJS using the Taqueria Node SDK and distributed via NPM