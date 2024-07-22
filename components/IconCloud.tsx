import IconCloud from "@/components/accternity/InteractiveIconCloud";
import FlipText from "./accternity/TextFlip";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nextdotjs",
  "nodedotjs",
  "express",
  "mongodb",
  "prisma",
  "dotnet",
  "csharp",
  "azure",
  "microsoftsqlserver",
  "visualstudio",
  "gcp",
  "firebase",
  "postgresql",
  "amazonaws",
  "docker",
  "mui",
  "tailwindcss",
  "bootstrap",
  "jira",
  "git",
  "github",
  "azuredevops",
];

function IconCloudDemo() {
  return (
    <>
      <div className="relative flex h-full w-full max-w-2xl items-center justify-center overflow-hidden rounded-lg mx-auto">
        <IconCloud iconSlugs={slugs} />
      </div>
    </>
  );
}
export default IconCloudDemo;
