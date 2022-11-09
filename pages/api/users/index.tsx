import dbConnection from '../../../utils/dbConnection';
import User from '../../../models/User';

dbConnection();

/* eslint-disable import/no-anonymous-default-export */
export default async (req: any, res: any) => {
    const { method } = req;
    switch (method) {
        case 'GET':
        try {
            const users = await User.find({});
            res.status(200).json({ success: true, data: users });
        } catch (error) {
            res.status("Error on GET try" + 400).json({ success: false });
        }
        break;
        case 'POST':
        try {
            const user = await User.create(req.body);
            res.status(201).json({ success: true, data: user });
        } catch (error) {
            res.status("Error on POST try" + 400).json({ success: false });
        }
        break;
        default:
        res.status(400).json({ success: false });
        break;
    }
};
    