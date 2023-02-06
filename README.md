# Module Federation Basic Example
With Next JS Host Application and React JS Remote Application


## Target Ports

React App (Remote) : localhost:3000<br>
Next App (Host) : localhost:3500


## Running Locally

```bash
npm install   # installs dependencies
npm start     # runs the applications locally
```

Post the execution of the above commands, 2 servers will be started concurrently.

Remote app at `localhost:3000`<br>
Host app at `localhost:3500`

Open `localhost:3500/test-mf` in your browser to view the module federated React JS Component within Next JS Application
