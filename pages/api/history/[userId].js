import { getUserHistory } from '@/lib/db-admin';

export default async (req, res) => {
  try {
    const { userId } = req.query;
    console.log(userId);
    const { history } = await getUserHistory(userId);

    res.status(200).json({ history });
  } catch (error) {
    res.status(500).json({ error });
  }
};
