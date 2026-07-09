import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  AppleIcon,
  DiscordIcon,
  FacebookIcon,
  GithubIcon,
  GoogleIcon,
  NotionIcon,
  SlackIcon,
  XIcon,
} from "@/registry/blocks/social-icons/icons";

interface OrbitIcon {
  icon: React.ReactNode;
}

interface Stat04Props {
  title?: string;
  avatar?: { src: string; fallback: string };
  icons?: OrbitIcon[];
  className?: string;
}

const Stat04 = ({
  title = "Over 50+ ready-to-use blocks\ntrusted by 1000+ developers",
  avatar = {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    fallback: "SC",
  },
  icons = [
    { icon: <GithubIcon className="w-full p-2.5" /> },
    { icon: <XIcon className="w-full p-2.5" /> },
    { icon: <DiscordIcon className="w-full p-2.5" /> },
    { icon: <AppleIcon className="w-full p-2.5" /> },
    { icon: <GoogleIcon className="w-full p-2.5" /> },
    { icon: <FacebookIcon className="w-full p-2.5" /> },
    { icon: <SlackIcon className="w-full p-2.5" /> },
    { icon: <NotionIcon className="w-full p-2.5" /> },
  ],
  className,
}: Stat04Props) => {
  // Position each icon on a circle around the center avatar
  const getOrbitPosition = (index: number, total: number) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
    return {
      left: `${50 + 50 * Math.cos(angle)}%`,
      top: `${50 + 50 * Math.sin(angle)}%`,
    };
  };

  return (
    <section className={cn("container mx-auto px-8 py-12 md:py-24", className)}>
      {/* Large stat headline */}
      <h1 className="mx-auto max-w-3xl text-center text-4xl leading-tight font-medium tracking-tight whitespace-pre-line md:text-5xl">
        {title}
      </h1>

      {/* Orbit layout */}
      <div className="relative mx-auto mt-16 size-56 md:mt-20 md:size-72">
        {/* Center avatar */}
        <Avatar className="absolute top-1/2 left-1/2 size-24 -translate-x-1/2 -translate-y-1/2 md:size-32">
          <AvatarImage src={avatar.src} alt="" />
          <AvatarFallback>{avatar.fallback}</AvatarFallback>
        </Avatar>

        {/* Icon pills in a ring */}
        {icons.map((item, index) => {
          const pos = getOrbitPosition(index, icons.length);
          return (
            <div
              key={index}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={pos}
            >
              <div className="flex size-10 items-center justify-center rounded-full border bg-background shadow-sm md:size-12">
                {item.icon}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Stat04;
