import { twMerge } from "tailwind-merge";

import { convertValueToString } from "@/lib";

import type { Post } from "@/shared";

export const TableBody = ({ posts }: { posts: Post[] }) => (
  <tbody className="divide-y divide-gray-200 text-xs md:text-sm">
    {posts.map((post) => (
      <tr key={post.id}>
        {Object.entries(post).map(([key, value]) => (
          <td
            key={key}
            className={twMerge(
              "px-6 py-4 align-middle whitespace-nowrap text-start text-gray-800",
              key === "title" && "font-bold text-blue"
            )}
          >
            {convertValueToString(value)}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
);
