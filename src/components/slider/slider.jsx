import { useEffect, useState } from "react";

const images = ["/tloi.png", "/ttw1.png", "/twb1.png"];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          width: `${images.length * 100}%`,
          transform: `translateX(-${(100 / images.length) * current}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex items-center justify-center"
            style={{ width: `${100 / images.length}%`, height: "400px" }} // fixed height
          >
            <img
              src={src}
              alt={`Slide ${index}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
      <br />
      {/* Dots */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-dark" : "bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
