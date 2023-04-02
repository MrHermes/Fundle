/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/react';

export const isAuthenticated = (WrappedComponent: any) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ error: 'Unauthorized' });
      return { props: {} };
    }

    const componentProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(req, res)
      : {};

    return { props: { ...componentProps } };
  };
};
