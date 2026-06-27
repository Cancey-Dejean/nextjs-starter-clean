import { cn } from "@/lib/utils";

export default function StoryWrapper({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="story-wrapper"
      className={cn(
        "mx-auto flex h-dvh w-full items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}

export function StoryWrapperSimple({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "mx-auto flex min-h-[200px] w-full items-center justify-center",
        className,
      )}
      {...props}
    />
  );
}
