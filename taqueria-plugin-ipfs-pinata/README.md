# IPFS Pinata Plugin

The IPFS Pinata plugin provides a `publish` task to upload metadata, media, or other files to IPFS via Pinata

The IPFS Pinata plugin also provides a `pin` task to link any existing files on Pinata to your Pinata account


 
## Requirements

- Taqueria v0.26.0 or later
- Node.js v16.17.1 or later
- Docker v20.10.12 or later
- A [Pinata](https://app.pinata.cloud) account
- A Pinata JWT Token added to a `.env` file in the project folder

## Installation

To install the IPFS Pinata plugin on a Taqueria project, navigate to the project folder and run:
```shell
taq install @taqueria/plugin-ipfs-pinata
```

## Configuration

In order for Taqueria to connect to Pinata, you must first add your Pinata JWT token to the project. To do this, follow the steps below:

1. Sign into your Pinata account [here](https://app.pinata.cloud/signin)
2. Create/find your JWT token and copy it
3. Create the file `.env` in your Taqueria project
4. Add the JWT token to a property called `pinataJwtToken` as shown below:

```json
pinataJwtToken=eyJhbGc...
```

## Usage

The IPFS Pinata plugin exposes a `publish` task which uploads one or more files to IPFS via Pinata, and stores the results in Taqueria State

You will first need to create a new directory in your project and add any metadata or media files you would like to upload to Pinata. Once you have a directory in your project with one or more files to upload, you can run:

```shell
taq publish <pathToFile>
```

The IPFS Pinata plugin exposes a `pin` task which links files already existing on Pinata to your Pinata account

You will need to find the CID for a file on Pinata then use that to pin the file to your account that is linked with the JWT you're using

```shell
taq pin <fileHash>
```

## Tasks

### The `taq publish` Task

The `publish` task is used for uploading files/directories of files to IPFS and the task has the following structure:

```shell
taq publish <sourceDirectory>
```

#### Task Properties

|  attribute |  value                          | 
|------------|:-------------------------------:|
|  task      | 'publish'                       | 
|  command   | 'publish < sourceDirectory >'   | 
|  aliases   | N/A                             |  

### The `taq pin` Task

The `pin` task is used for pinning existing files on Pinata to your account and the task has the following structure:

```shell
taq pin < hash >
```

#### Task Properties

|  attribute |  value                          | 
|------------|:-------------------------------:|
|  task      | 'pin'                           | 
|  command   | 'pin < fileHash >'              | 
|  aliases   | N/A                             |  


## Plugin Architecture

This is a plugin developed for Taqueria built on NodeJS using the Taqueria Node SDK and distributed via NPM
