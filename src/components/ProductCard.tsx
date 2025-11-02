import React from "react";

type Props = {
  id: number;
  title: string;
  category: string;
  price: number;
  originalPrice?: number | null;
  image: string;
  href?: string;
};

const ProductCard: React.FC<Props> = ({
  id,
  title,
  category,
  price,
  originalPrice,
  image,
  href = `#/product/${id}`,
}) => {
  return (
    <article
      className="group block bg-white border border-gray-200 rounded-md overflow-hidden focus-within:ring-4 focus-within:ring-red-300 transition-shadow duration-150"
      aria-label={`${title} ราคา ${price} บาท`}
    >
      <a href={href} className="block">
        <div className="relative w-full aspect-4/3 bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-400 md:group-hover:scale-102 will-change-transform"
            style={{ transformOrigin: "center" }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/55 to-transparent pointer-events-none" />
          {originalPrice && (
            <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded">
              ลด
            </span>
          )}
          <div className="absolute left-3 bottom-3 right-3 flex items-end justify-between">
            <h3 className="text-white text-sm font-medium line-clamp-2">
              {title}
            </h3>
            <span className="bg-white/95 text-gray-900 text-sm font-semibold px-2 py-0.5 rounded shadow-sm">
              ฿{price.toLocaleString()}
            </span>
          </div>
        </div>

        <div className="p-3">
          <p className="text-[11px] text-gray-500 mb-1 uppercase tracking-wide">
            {category}
          </p>
          <h4 className="text-sm font-semibold text-gray-900 line-clamp-2 leading-tight min-h-10">
            {title}
          </h4>
          <div className="mt-2 flex items-center gap-2">
            {originalPrice ? (
              <>
                <span className="text-gray-400 line-through text-sm">
                  ฿{originalPrice.toLocaleString()}
                </span>
                <span className="text-red-500 font-bold text-base">
                  ฿{price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-gray-900 font-semibold text-base">
                ฿{price.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </a>
    </article>
  );
};

export default ProductCard;
