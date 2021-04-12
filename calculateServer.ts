import express from 'express';
import { allocateServer, server } from './allocateServer';

const calculateServer = (req: express.Request, res: express.Response) => {
  const { virtualMachines } = req.body;
  const numberOfVirtualMachines = allocateServer(server, virtualMachines);
  return res.send(
    `the number of servers needed are: ${numberOfVirtualMachines}`,
  );
};

export { calculateServer };
