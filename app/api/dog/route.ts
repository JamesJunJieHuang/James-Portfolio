// export async function GET(request: Request) {
//   return new Response("Hello, DOG!");
// }

export function getDog(req: Request, res: Response) {
  if (req.method === "POST") {
    console.log("POST REQUEST RECEIVED");
  } else if (req.method === "GET") {
    console.log("POST REQUEST RECEIVED");
  }
}
