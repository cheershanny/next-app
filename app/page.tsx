import { getServerSession } from "next-auth";
import Image from "next/image";
import hanny from "@/public/images/hanny-after-seeing-food.jpeg";
import { authOptions } from "./api/auth/authOptions";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>
        Hello{" "}
        {session ? <span>{session.user!.name}</span> : <span>amigo! 🦩</span>}
      </h1>
      <Image src={hanny} alt="Hanny is happy when food arrived" />
      <Image
        src="https://bit.ly/react-cover"
        alt="react cover"
        width={300}
        height={100}
      />
    </main>
  );
}
