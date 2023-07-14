export default function handler(request, response) {
  const date = new Date().toLocaleString();
  return response.status(200).json(date);
}
