import YouTubeChannelCard from "@/components/YouTubeChannelCard.js";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex items-center justify-center font-bold text-xl h-screen">
      <YouTubeChannelCard
        channelName="Shruti Kapoor"
        channelCoverImage="https://yt3.googleusercontent.com/MUozE6q7s3Yiu-KjTgN_zwedmhxFMtpp9VUIHi_b0n0pKG2a68YlJCG7_yznzWaYIzfscBdVvQ=w2276-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
        channelLogo="https://yt3.googleusercontent.com/a7BVjSWDl8RwnIAJuRrUXKEobjU6YFHJB7UfABmgrXUcrkTWhsKpB-EcDt6aQSaOYWOP-wyRn30=s160-c-k-c0x00ffffff-no-rj"
        channelDescription="Helping you master React & AI with comedy, easy-to-follow tutorials, and real-world applications."
        channelLink="https://www.youtube.com/shrutikapoor08"
        subscriberCount="100K is the Goal for 2025!"
        isVerified
        joinedDate="19 Nov 2007"
        videoCount="Amazing Videos"
        channelUserName="shrutikapoor08"
      />
    </div>
  );
}
