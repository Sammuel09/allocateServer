import express from 'express';
import { calculateServer } from './calculateServer';
import { validateVirtualMachines } from './middleware';

const app = express();
const PORT = 8080;
app.use(express.json());

app.get('/', (req, res) =>
  res.send(
    'This application calculates the number of servers needed to host a non-empty collection of Virtual Machines',
  ),
);

// add a middle ware to check the type of the server/vm

app.post('/server', validateVirtualMachines, calculateServer);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
