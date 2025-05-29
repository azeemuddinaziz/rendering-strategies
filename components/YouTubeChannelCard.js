"use client";

import { Bell, CheckCircle, Share2, ThumbsUp } from "lucide-react";

export default function YouTubeChannelCard({
  channelName,
  channelCoverImage,
  channelLogo,
  channelDescription,
  channelLink,
  subscriberCount = "1.2M subscribers",
  isVerified = true,
  joinedDate = "Jan 2020",
  videoCount = "1.5K videos",
  channelUserName = "",
}) {
  const handleSubscribe = () => {
    window.open(channelLink, "_blank");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${channelName} - YouTube Channel`,
        url: channelLink,
      });
    } else {
      navigator.clipboard.writeText(channelLink);
    }
  };

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg bg-white shadow-lg m-4">
      {/* Channel Cover Image */}
      <div className="relative h-32 w-full">
        <img
          src={channelCoverImage || "/placeholder.svg"}
          alt={`${channelName} cover`}
          className="h-full w-full object-cover object-right"
        />
      </div>

      <div className="p-2">
        <div className="relative px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Channel Logo */}
              <div className="h-16 w-16 overflow-hidden rounded-full border-4 border-white">
                <img
                  src={channelLogo || "/placeholder.svg"}
                  alt={`${channelName} logo`}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex-1 font-normal">
                <div className="flex items-center gap-1">
                  <h2 className="text-xl text-gray-900">{channelName}</h2>
                  {isVerified && (
                    <CheckCircle className="h-4 w-4 fill-gray-500 text-white font-normal" />
                  )}
                </div>
                <p className="text-sm text-gray-500">
                  @{channelUserName.toLowerCase().replace(/\s+/g, "")} •{" "}
                  {subscriberCount}
                </p>
              </div>
            </div>

            {/* Channel Info */}
            <div className="flex items-start justify-between">
              {/* Subscribe Button */}
              <button
                onClick={handleSubscribe}
                className="rounded-full bg-red-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 cursor-pointer"
              >
                Subscribe
              </button>
            </div>
          </div>

          {/* Channel Description */}
          <div className="pt-4">
            <p className="text-sm font-normal text-gray-700 leading-relaxed">
              {channelDescription}
            </p>
          </div>
        </div>

        {/* Channel Stats */}
        <div className="mt-4 flex items-center justify-center gap-12 p-4">
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
            <ThumbsUp className="h-4 w-4 hover:fill-black hover:cursor-pointer" />
            <span className="text-sm">Like</span>
          </button>
          <button className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
            <Bell className="h-4 w-4 hover:fill-black hover:cursor-pointer" />
            <span className="text-sm">Turn on Notifications</span>
          </button>
          <button
            onClick={handleShare}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Share2 className="h-4 w-4 hover:fill-black hover:cursor-pointer" />
            <span className="text-sm">Share</span>
          </button>
        </div>
      </div>

      {/* <div className="flex justify-between bg-gray-50 p-4">
        <div className="text-xs text-gray-500">Joined {joinedDate}</div>
        <div className="text-xs text-gray-500">{videoCount}</div>
      </div> */}
    </div>
  );
}
