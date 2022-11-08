const { connect } = require('../../connection.js'); 
const { ObjectId } = require('mongodb').ObjectId;

export default async function handler(req, res) {
    switch (req.method) {
        case 'POST': {
            const { username, content } = req.body;
            const db = await connect();
            const collection = db.collection('posts');
            const result = await collection.insertOne({ username, content });
            res.status(200).json({ success: true, data: result.ops[0] });
        }
        case 'GET': {
            const db = await connect();
            const collection = db.collection('posts');
            const result = await collection.find({}).toArray();
            res.status(200).json({ success: true, data: result });
        }
        case 'DELETE': {
            const { id } = req.body;
            const db = await connect();
            const collection = db.collection('posts');
            const result = await collection.deleteOne({ _id: ObjectId(id) });
            res.status(200).json({ success: true, data: result });
        }
        case 'PUT': {
            const { id, username, content } = req.body;
            const db = await connect();
            const collection = db.collection('posts');
            const result = await collection.updateOne({ _id: ObjectId(id) }, { $set: { username, content } });
            res.status(200).json({ success: true, data: result });
        }
    }
}