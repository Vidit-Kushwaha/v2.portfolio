// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

app.get('/your-route', (req, res) => {
  res.set('Cache-Control', 'public, max-age=86400');
  // Your code to handle the request
});