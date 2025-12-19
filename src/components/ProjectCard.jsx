import React from "react";

const ProjectCard = ({ title, description, image, tags, repoLink }) => {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-white/10">
      <figure className="h-48 bg-base-300 overflow-hidden relative group">
        <div className="w-full h-full flex items-center justify-center text-base-content/20 font-bold text-2xl group-hover:scale-110 transition-transform duration-500">
          {image || "Image Preview"}
        </div>
      </figure>

      <div className="card-body">
        <h2 className="card-title justify-between text-white">{title}</h2>

        <p className="text-sm text-gray-400">{description}</p>

        <div className="card-actions justify-start mt-3 gap-2">
          {tags &&
            tags.map((tag, i) => (
              <div
                key={i}
                className="badge badge-outline badge-primary badge-sm p-3"
              >
                {tag}
              </div>
            ))}
        </div>

        <div className="card-actions justify-end mt-4">
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm w-full"
          >
            View Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            ></svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
