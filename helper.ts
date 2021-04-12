import express from 'express';
export const errorHelper = (
  res: express.Response,
  status: number,
  message: string,
) => {
  return res.status(status).json({
    status,
    message,
  });
};
