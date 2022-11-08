import dbConnection from '../../../utils/dbConnection';
import Post from '../../../models/Post';

dbConnection();

/* eslint-disable import/no-anonymous-default-export */
export default async (req:any, res:any) => {
  const { method } = req;
  switch (method) {
    case 'GET':
      try {
        const posts = await Post.find({});
          res
              .status(200)
              .json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
};
