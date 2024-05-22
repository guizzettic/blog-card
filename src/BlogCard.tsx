import React from "react";
import VectorArrow from "./assets/Vectorarrow.svg";

interface BlogCardProps {
  img: string;
  label: string;
  title: string;
  message: string;
  link?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  img,
  label,
  title,
  message,
  link,
}) => {
  return (
    <div className="flex h-auto max-h-[504px] w-auto max-w-[340px] flex-col justify-between overflow-hidden rounded-xl bg-white shadow-md">
      <img
        className="h-[288px] w-full object-cover"
        src={img}
        alt="Interior design inspiration"
        loading="lazy"
      />

      <div
        className="flex h-full w-full flex-col justify-around px-4"
        role="contentinfo"
      >
        <div className="flex h-[60px] flex-col justify-between">
          <p className="inline-block h-6 w-16 rounded-xl border border-green-200 bg-green-50 text-center text-sm text-green-700">
            {label}
          </p>
          <h3 className="text-lg font-semibold tracking-wide text-neutral-900">
            {title}
          </h3>
        </div>
        <div className="flex h-[96px] flex-col justify-between">
          <p className="text-neutral-600">{message}</p>
          <div className="flex w-[114px] items-center justify-between">
            <a
              href={link}
              className="bg-transparent text-indigo-700 hover:text-indigo-500"
              role="button"
              aria-label="Read more about Top 5 Living Room Inspirations"
              tabIndex={0}
            >
              Read more
            </a>
            <img src={VectorArrow} className="size-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
// 89.3, 71.2, 58.9
