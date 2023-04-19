import exp from "constants";
import {
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
  GetStaticProps,
  GetStaticPaths,
  GetServerSideProps,
} from "next";

// Static Generation and Server-side Rendering
export const GetStaticProps: GetStaticProps = async (context) => {};

export const GetStaticPaths: GetStaticPaths = async () => {};

export const getServerSideProps: GetServerSideProps = async (context) => {};

// API Routes
import type { NextApiRequest, NextApiResponse } from "next";

export function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}

type Data = {
  name: string;
};

export function handler1(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: "John Doe" });
}
