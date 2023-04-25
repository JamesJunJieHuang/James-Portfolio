export async function GET(request: Request) {
    console.log('get request received')
  return new Response("Hello, DOG!");
}

export async function POST(request: Request) {
  console.log("post request received");
  return new Response("post, DOG!");
}

// function getDog(req: Request, res: Response) {
//   if (req.method === "POST") {
//     console.log("POST REQUEST RECEIVED");
//   } else if (req.method === "GET") {
//     console.log("POST REQUEST RECEIVED");
//   }
//   return;
// }

// export default getDog;
