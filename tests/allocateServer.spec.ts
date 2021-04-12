import { allocateServer } from '../allocateServer';
describe('CALCULATE ALLOCATED SERVER', () => {
  it('should return number of servers needed', () => {
    const server = { cpu: 2, ram: 32, hdd: 100 };
    const virtualMachines = [{ cpu: 2, ram: 32, hdd: 100 }];
    const result = allocateServer(server, virtualMachines);
    expect(result).toBe(1);
  });
});
