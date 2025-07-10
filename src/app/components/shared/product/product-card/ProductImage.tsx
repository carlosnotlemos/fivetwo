type ProductImageProps = {
  src: string
  alt: string
}

export default function ProductImage({src, alt }: ProductImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
    />
  );
}