import React from "react";

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
    //     <div className="mt-0 sm:mt-20 md:mt-40">
    // </div>
    <div className="max-w-sm mt-20 md:m-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm">
      <img className="h-80 w-full object-cover" src={img} alt="article image" />
      <div className="p-4">
        <div className="label mb-4">{label}</div>
        <h3 className="text-neutral-900 text-lg md:text-xl font-bold mb-2">
          {title}
        </h3>
        <p className="text-neutral-600 text-base mb-4">{message}</p>
        <a href={link} className={link ? "btn-normal" : "btn-disabled"}>
          Read more {"->"}
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
