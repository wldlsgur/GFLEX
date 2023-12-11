import { VercelRequest, VercelResponse } from '@vercel/node';
import axios from 'axios';

interface MovieListRequest {
    s: string;
    y?: string;
    page?: number;
}
interface MovieDetailRequest {
    i: string;
    plot?: 'short' | 'full';
}

interface RequestBody {
    params: MovieListRequest | MovieDetailRequest;
    method: 'GET';
}

export default async function (req: VercelRequest, res: VercelResponse) {
    const { API_ADDRESS, API_KEY } = process.env;
    const { params, method = 'GET' }: RequestBody = req.body;
    const { data } = await axios({
        url: API_ADDRESS,
        method,
        headers: { 'content-Type': 'application/json' },
        params: {
            apikey: API_KEY,
            ...params,
        },
    });

    res.status(200).json(data);
}
