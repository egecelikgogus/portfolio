import Image from "next/image";
import { imageSize } from "@/lib/imageSize";

/* Publishes an image at its own aspect ratio — nothing is cropped or
   stretched. Real dimensions come from the file at build time so the space is
   reserved correctly; if they can't be read we still render at natural ratio,
   just without reserved space. */
export default function CaseImage({
  src,
  alt,
  priority,
  sizes = "100vw",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
}) {
  const dim = imageSize(src);

  if (!dim) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={dim.width}
      height={dim.height}
      sizes={sizes}
      priority={priority}
    />
  );
}
