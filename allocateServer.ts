export interface server {
  cpu: number;
  ram: number;
  hdd: number;
}
export const server: server = { cpu: 2, ram: 32, hdd: 100 };
const listOfSkippedVms: server[] = [];
const newServers: server[] = [];
let currentServer: server = { cpu: 0, ram: 0, hdd: 0 };

const allocateServer = (server: server, virtualMachines: server[]) => {
  for (let i = 0; i < virtualMachines.length; i++) {
    let vm = virtualMachines[i];
    // check for vms that are above the server capacity and skip them.
    if (vm.cpu > server.cpu || vm.ram > server.ram || vm.hdd > server.hdd) {
      listOfSkippedVms.push(vm);
    }
    // if the vm has the exact same capacity as the server, then allocate a server
    else if (
      vm.cpu == server.cpu &&
      vm.ram == server.ram &&
      vm.hdd == server.hdd
    ) {
      newServers.push(server);
      currentServer = { cpu: server.cpu, ram: server.ram, hdd: server.hdd };
    } else {
      // if the vm has a lesser capacity than the server
      // check if there is enough space in the previously occupied server.
      if (
        currentServer.cpu - vm.cpu >= vm.cpu &&
        currentServer.ram - vm.ram >= vm.ram &&
        currentServer.hdd - vm.hdd >= vm.hdd
      ) {
        // if there is enough space in the previously occupied server for a new vm, do not allocate server
        currentServer = {
          cpu: currentServer.cpu - vm.cpu,
          ram: currentServer.ram - vm.ram,
          hdd: currentServer.hdd - vm.hdd,
        };
      } else {
        // if there is not enough space in the previously occupied server for a new vm, then allocate a server
        // allocate a new server
        newServers.push(server);
        currentServer = { cpu: server.cpu, ram: server.ram, hdd: server.hdd };
      }
    }
  }

  return newServers.length;
};

export { allocateServer };
