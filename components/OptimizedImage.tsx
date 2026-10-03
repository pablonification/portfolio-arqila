import Image, { type ImageProps } from "next/image";
import manifest from "@/lib/image-manifest.json";

const images: Record<string, { src: string; width: number; height: number; blurDataURL: string }> = manifest;

// Native next/image owns the load lifecycle and removes the preview on load.
// Explicit dimensions keep the layout stable even before any bytes arrive.
export default function OptimizedImage({ src, sizes, quality = 80, ...props }: ImageProps) {
  const image = typeof src === "string" ? images[src] : undefined;
  const width = Number(props.width);
  return (
    <Image
      {...props}
      src={image ?? src}
      quality={quality}
      style={image ? { aspectRatio: `${image.width} / ${image.height}`, ...props.style } : props.style}
      sizes={sizes ?? (width && width <= 128 ? `${width}px` : "(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 1152px")}
      {...(image ? { placeholder: "blur" as const, blurDataURL: image.blurDataURL } : {})}
    />
  );
}
