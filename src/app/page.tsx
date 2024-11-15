import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/X5UnS7lIqS2xBsZGubF6EbO8jroHwTlu1GM4hgFRIi3X9AsL",
  "https://utfs.io/f/X5UnS7lIqS2xgZdx1yrzdLIG1KPqpfy3DBwvXjtsSU8AbkFY",
  "https://utfs.io/f/X5UnS7lIqS2xU6q5aIiFrdpDzOSfRBi9kZxAm5cXsjUbTqva",
  "https://utfs.io/f/X5UnS7lIqS2xj3eOYv14AlPxSYT6iHVOcu5q2QsmvL9Gw0Xk",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
