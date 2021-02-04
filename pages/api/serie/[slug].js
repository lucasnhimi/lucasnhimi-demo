import { getSerie } from '@/lib/dato-cms';

export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    const serie = await getSerie(slug);
    return res.status(200).json({ serie });
  } catch (error) {
    return res.status(500).json({ error });
  }
}
