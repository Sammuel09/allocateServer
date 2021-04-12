import express from 'express';
import { server } from './allocateServer';
import { errorHelper } from './helper';

export const validateVirtualMachines = (
  req: express.Request,
  res: express.Response,
  next: () => void,
) => {
  const { virtualMachines } = req.body;
  // check if virtualMachines is of an array type
  if (!Array.isArray(virtualMachines)) {
    console.log('hgere');
    errorHelper(
      res,
      400,
      'Bad request. Request body has to be of the type Array',
    );
  }

  // check if virtualMachines is not empty
  if (virtualMachines.length === 0) {
    errorHelper(res, 400, 'Bad request. Request body cannot be empty');
  }

  // check to be sure that every item in the array is an object
  const isAnObject = (value: server) =>
    typeof value === 'object' && value !== null;
  if (!virtualMachines.every(isAnObject)) {
    errorHelper(
      res,
      400,
      'Bad request. Request body has to contain an array of objects',
    );
  }

  // check to be sure that every item in the array is an object that contains
  // values of numeric type
  const containsCorrectObjectType = (value: server) => {
    return (
      Number.isFinite(value.cpu) &&
      Number.isFinite(value.ram) &&
      Number.isFinite(value.hdd)
    );
  };

  if (!virtualMachines.every(containsCorrectObjectType)) {
    errorHelper(
      res,
      400,
      'Bad request. Request body should contain an array of objects of the correct type',
    );
  }
  next();
};
