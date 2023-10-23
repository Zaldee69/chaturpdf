import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  if (typeof window !== "undefined") return path;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}${path}`;
  return `http://localhost:${process.env.PORT ?? 3000}${path}`;
}

export function constructMetadata({
  title = "chaturpdf - The Saas for students and researcher",
  description = "chaturpdf is an open-source software to make chatting to your PDF files easy.",
  image = "/thumbnail.png",
  icons = "/icon.png",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@zaldee",
    },
    icons,
    metadataBase: new URL("https://zaldev.chaturpdf.com"),
    themeColor: "#FFF",
    ...(noIndex && {
      index: false,
      follow: false,
    }),
  };
}
